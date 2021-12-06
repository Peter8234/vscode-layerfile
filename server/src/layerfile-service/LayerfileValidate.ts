import { LayerfileParserListener } from './antlr/LayerfileParserListener'
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Diagnostic } from "vscode-languageserver-types";
import { LayerfileLexer } from "./antlr/LayerfileLexer"
import { LayerfileParser, ButtonContext } from './antlr/LayerfileParser';
import { ANTLRErrorListener, CharStreams, CommonTokenStream, RecognitionException, Recognizer } from 'antlr4ts';

class LayerValidator implements LayerfileParserListener {
	errors = []
	enterButton(ctx: ButtonContext) {
		console.log("enter button")
	}
}


class LayerErrorListener implements ANTLRErrorListener<any> {

	output : Diagnostic[];

	constructor(output : Diagnostic[]) {
		this.output = output;
	}

	syntaxError (recognizer: Recognizer<any, any>,
				 offendingSymbol: any | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {
	}
}

function validate (text : string) {
	var chars = CharStreams.fromString(text);
	var lexer = new LayerfileLexer(chars);
	var tokenStream = new CommonTokenStream(lexer);
	var parser = new LayerfileParser(tokenStream);
	parser.addErrorListener
	let tree = parser.layerfile()
	// Create the listener
	const listener: LayerfileParserListener = new LayerValidator();
	// Use the entry point for listeners
	ParseTreeWalker.DEFAULT.walk(listener, tree)
}

export function validateLayerfile(document: TextDocument): Diagnostic[] {
	return []
}


var text =
`
FROM vm/ubuntu:18.04
# install apt dependencies
RUN apt-get update
CACHE /var/lib/apt
RUN apt-get -y install python3 curl
CHECKPOINT

ENV a=b
ENV NODE_OPTIONS="--max-old-space-size=8192"
ENV a=` + "`echo hello`" + ` b=$(echo hello) c='echo hello' d="echo hello"
BUILD ENV GIT_BRANCH

# install app
WORKDIR /tmp/hello
COPY example.txt ./
RUN BACKGROUND python3 -m http.server 8080
RUN python3 -m http.server 8080& sleep 5
EXPOSE WEBSITE 8080 /api
EXPOSE WEBSITE https://localhost
MEMORY 1G

CLONE "git@github.com:hello/my repo has spaces.git" /clone-dest
CLONE "a@a.a/git" /a /b DEFAULT='hello world' /clone-dest
CLONE https://github.com/webappio/docs.git services/web/app/routes/docs/docs

CHECKPOINT test-and-push
BUTTON deploy?

SECRET ENV thesecret variables

RUN if [ "$(curl localhost:8080/example.txt)" = "data from example.txt" ]; then \
      echo 'success!'; \
    else \
      echo 'failed!'; \
    fi

USER testuser---z00_

SKIP REMAINING IF API_EXTRA="" AND LAYERCI != true
SKIP REMAINING IF GIT_BRANCH =~ "m.*ster spaces" AND JOB_ID !=~ "layerci/.*"

WAIT  some/other/Layerfile
SPLIT 5
`;

validate(text)
