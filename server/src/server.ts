'use strict';
import {
	CodeAction, CodeActionKind, Command, createConnection, Diagnostic, DiagnosticSeverity, InitializeParams, InitializeResult, Position, Range, TextDocumentEdit,
	TextDocuments, TextDocumentSyncKind, TextEdit, DidChangeConfigurationNotification, DidChangeTextDocumentParams, NotificationHandler, SemanticTokensParams,
	CompletionParams
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { legend, computeSemanticTokens } from './layerfile-service'



const connection = createConnection();
connection.console.info(`Sample server running in node ${process.version}`);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;
	capabilities.textDocument?.codeLens?.dynamicRegistration
	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// LSP supports code completion
			completionProvider: {
				resolveProvider: true
			},
			// LSP support semantic tokens
			semanticTokensProvider: {
				full: {
					delta: false
				},
				legend
			},
			// LSP supports code lens
			//codeLensProvider: {
			//	resolveProvider: false
			//},
			//hoverProvider: true,
			//documentHighlightProvider: true
		}
	};
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});


connection.onCompletion((textDocumentPosition : CompletionParams) => {
	const document = documents.get(textDocumentPosition.textDocument.uri);
	console.log('completion event fired')
	if (!document) {
		return null;
	}
	console.log(document.getText({
		start: textDocumentPosition.position,
		end: {
			...textDocumentPosition.position,
			line: textDocumentPosition.position.line + 10
		}
	}))
	return null;
});

connection.languages.semanticTokens.on((semanticTokenParams: SemanticTokensParams) => {
	const document = documents.get(semanticTokenParams.textDocument.uri);
	if (!document) {
		return {
			data: []
		}
	}
	console.log('eval semantic tokens')
	return computeSemanticTokens(document);
});

documents.listen(connection);
connection.listen();
