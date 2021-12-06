// Generated from LayerfileParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LayerfileParserListener } from "./LayerfileParserListener";
import { LayerfileParserVisitor } from "./LayerfileParserVisitor";


export class LayerfileParser extends Parser {
	public static readonly WS = 1;
	public static readonly COMMENT = 2;
	public static readonly BUTTON = 3;
	public static readonly CACHE = 4;
	public static readonly CHECKPOINT = 5;
	public static readonly CLONE = 6;
	public static readonly COPY = 7;
	public static readonly ENV = 8;
	public static readonly BUILD_ENV = 9;
	public static readonly FROM = 10;
	public static readonly MEMORY = 11;
	public static readonly RUN = 12;
	public static readonly RUN_BACKGROUND = 13;
	public static readonly RUN_REPEATABLE = 14;
	public static readonly SECRET_ENV = 15;
	public static readonly SETUP_FILE = 16;
	public static readonly SKIP_REMAINING_IF = 17;
	public static readonly SPLIT = 18;
	public static readonly EXPOSE_WEBSITE = 19;
	public static readonly USER = 20;
	public static readonly WAIT = 21;
	public static readonly WORKDIR = 22;
	public static readonly BUILD_ENV_COMMENT = 23;
	public static readonly BUILD_ENV_VALUE = 24;
	public static readonly BUILD_ENV_WS = 25;
	public static readonly BUILD_ENV_EOL = 26;
	public static readonly BUTTON_COMMENT = 27;
	public static readonly BUTTON_DATA = 28;
	public static readonly CHECKPOINT_COMMENT = 29;
	public static readonly CHECKPOINT_VALUE = 30;
	public static readonly CHECKPOINT_WS = 31;
	public static readonly CHECKPOINT_EOL = 32;
	public static readonly CLONE_VALUE = 33;
	public static readonly CLONE_WS = 34;
	public static readonly CLONE_EOL = 35;
	public static readonly ENV_COMMENT = 36;
	public static readonly ENV_VALUE_WS = 37;
	public static readonly ENV_VALUE = 38;
	public static readonly ENV_WS = 39;
	public static readonly ENV_EOL = 40;
	public static readonly WEBSITE_COMMENT = 41;
	public static readonly WEBSITE_EOL = 42;
	public static readonly WEBSITE_ITEM = 43;
	public static readonly WEBSITE_WS = 44;
	public static readonly FROM_COMMENT = 45;
	public static readonly FROM_DATA = 46;
	public static readonly MEMORY_COMMENT = 47;
	public static readonly MEMORY_EOF = 48;
	public static readonly MEMORY_AMOUNT = 49;
	public static readonly RUN_DATA = 50;
	public static readonly SECRET_ENV_VALUE = 51;
	public static readonly SECRET_ENV_WS = 52;
	public static readonly SECRET_ENV_EOL = 53;
	public static readonly SECRET_ENV_COMMENT = 54;
	public static readonly SKIP_REMAINING_IF_VALUE = 55;
	public static readonly SKIP_REMAINING_IF_AND = 56;
	public static readonly SKIP_REMAINING_IF_WS = 57;
	public static readonly SKIP_REMAINING_IF_EOL = 58;
	public static readonly SPLIT_NUMBER = 59;
	public static readonly SPLIT_WS = 60;
	public static readonly USER_COMMENT = 61;
	public static readonly USER_NAME = 62;
	public static readonly FILE_COMMENT = 63;
	public static readonly END_OF_FILES = 64;
	public static readonly FILE = 65;
	public static readonly FILE_WS = 66;
	public static readonly RULE_button = 0;
	public static readonly RULE_cache = 1;
	public static readonly RULE_checkpoint = 2;
	public static readonly RULE_clone = 3;
	public static readonly RULE_copy = 4;
	public static readonly RULE_env = 5;
	public static readonly RULE_build_env = 6;
	public static readonly RULE_from = 7;
	public static readonly RULE_memory = 8;
	public static readonly RULE_run = 9;
	public static readonly RULE_run_background = 10;
	public static readonly RULE_run_repeatable = 11;
	public static readonly RULE_secret_env = 12;
	public static readonly RULE_setup_file = 13;
	public static readonly RULE_skip_remain_if = 14;
	public static readonly RULE_split = 15;
	public static readonly RULE_expose_website = 16;
	public static readonly RULE_user = 17;
	public static readonly RULE_wait = 18;
	public static readonly RULE_workdir = 19;
	public static readonly RULE_comment = 20;
	public static readonly RULE_layerfile = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"button", "cache", "checkpoint", "clone", "copy", "env", "build_env", 
		"from", "memory", "run", "run_background", "run_repeatable", "secret_env", 
		"setup_file", "skip_remain_if", "split", "expose_website", "user", "wait", 
		"workdir", "comment", "layerfile",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'BUTTON'", "'CACHE'", "'CHECKPOINT'", 
		"'CLONE '", "'COPY'", "'ENV '", "'BUILD ENV '", "'FROM '", "'MEMORY '", 
		"'RUN '", "'RUN BACKGROUND '", "'RUN REPEATABLE '", "'SECRET ENV '", "'SETUP FILE '", 
		"'SKIP REMAINING IF '", "'SPLIT '", "'EXPOSE WEBSITE '", "'USER '", "'WAIT '", 
		"'WORKDIR '", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'AND'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "COMMENT", "BUTTON", "CACHE", "CHECKPOINT", "CLONE", 
		"COPY", "ENV", "BUILD_ENV", "FROM", "MEMORY", "RUN", "RUN_BACKGROUND", 
		"RUN_REPEATABLE", "SECRET_ENV", "SETUP_FILE", "SKIP_REMAINING_IF", "SPLIT", 
		"EXPOSE_WEBSITE", "USER", "WAIT", "WORKDIR", "BUILD_ENV_COMMENT", "BUILD_ENV_VALUE", 
		"BUILD_ENV_WS", "BUILD_ENV_EOL", "BUTTON_COMMENT", "BUTTON_DATA", "CHECKPOINT_COMMENT", 
		"CHECKPOINT_VALUE", "CHECKPOINT_WS", "CHECKPOINT_EOL", "CLONE_VALUE", 
		"CLONE_WS", "CLONE_EOL", "ENV_COMMENT", "ENV_VALUE_WS", "ENV_VALUE", "ENV_WS", 
		"ENV_EOL", "WEBSITE_COMMENT", "WEBSITE_EOL", "WEBSITE_ITEM", "WEBSITE_WS", 
		"FROM_COMMENT", "FROM_DATA", "MEMORY_COMMENT", "MEMORY_EOF", "MEMORY_AMOUNT", 
		"RUN_DATA", "SECRET_ENV_VALUE", "SECRET_ENV_WS", "SECRET_ENV_EOL", "SECRET_ENV_COMMENT", 
		"SKIP_REMAINING_IF_VALUE", "SKIP_REMAINING_IF_AND", "SKIP_REMAINING_IF_WS", 
		"SKIP_REMAINING_IF_EOL", "SPLIT_NUMBER", "SPLIT_WS", "USER_COMMENT", "USER_NAME", 
		"FILE_COMMENT", "END_OF_FILES", "FILE", "FILE_WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LayerfileParser._LITERAL_NAMES, LayerfileParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LayerfileParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "LayerfileParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return LayerfileParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LayerfileParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LayerfileParser._ATN, this);
	}
	// @RuleVersion(0)
	public button(): ButtonContext {
		let _localctx: ButtonContext = new ButtonContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LayerfileParser.RULE_button);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.match(LayerfileParser.BUTTON);
			this.state = 45;
			this.match(LayerfileParser.BUTTON_DATA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cache(): CacheContext {
		let _localctx: CacheContext = new CacheContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LayerfileParser.RULE_cache);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(LayerfileParser.CACHE);
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.FILE) {
				{
				{
				this.state = 48;
				this.match(LayerfileParser.FILE);
				}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 54;
			this.match(LayerfileParser.END_OF_FILES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public checkpoint(): CheckpointContext {
		let _localctx: CheckpointContext = new CheckpointContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LayerfileParser.RULE_checkpoint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(LayerfileParser.CHECKPOINT);
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.CHECKPOINT_VALUE) {
				{
				{
				this.state = 57;
				this.match(LayerfileParser.CHECKPOINT_VALUE);
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
			this.match(LayerfileParser.CHECKPOINT_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clone(): CloneContext {
		let _localctx: CloneContext = new CloneContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LayerfileParser.RULE_clone);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(LayerfileParser.CLONE);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.CLONE_VALUE) {
				{
				{
				this.state = 66;
				this.match(LayerfileParser.CLONE_VALUE);
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 72;
			this.match(LayerfileParser.CLONE_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public copy(): CopyContext {
		let _localctx: CopyContext = new CopyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LayerfileParser.RULE_copy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(LayerfileParser.COPY);
			this.state = 75;
			this.match(LayerfileParser.FILE);
			this.state = 76;
			this.match(LayerfileParser.FILE);
			this.state = 77;
			this.match(LayerfileParser.END_OF_FILES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public env(): EnvContext {
		let _localctx: EnvContext = new EnvContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LayerfileParser.RULE_env);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(LayerfileParser.ENV);
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.ENV_VALUE) {
				{
				{
				this.state = 80;
				this.match(LayerfileParser.ENV_VALUE);
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 86;
			this.match(LayerfileParser.ENV_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public build_env(): Build_envContext {
		let _localctx: Build_envContext = new Build_envContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LayerfileParser.RULE_build_env);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(LayerfileParser.BUILD_ENV);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.BUILD_ENV_VALUE) {
				{
				{
				this.state = 89;
				this.match(LayerfileParser.BUILD_ENV_VALUE);
				}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 95;
			this.match(LayerfileParser.BUILD_ENV_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public from(): FromContext {
		let _localctx: FromContext = new FromContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LayerfileParser.RULE_from);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(LayerfileParser.FROM);
			this.state = 98;
			this.match(LayerfileParser.FROM_DATA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memory(): MemoryContext {
		let _localctx: MemoryContext = new MemoryContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LayerfileParser.RULE_memory);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(LayerfileParser.MEMORY);
			this.state = 101;
			this.match(LayerfileParser.MEMORY_AMOUNT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public run(): RunContext {
		let _localctx: RunContext = new RunContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LayerfileParser.RULE_run);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(LayerfileParser.RUN);
			this.state = 104;
			this.match(LayerfileParser.RUN_DATA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public run_background(): Run_backgroundContext {
		let _localctx: Run_backgroundContext = new Run_backgroundContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LayerfileParser.RULE_run_background);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(LayerfileParser.RUN_BACKGROUND);
			this.state = 107;
			this.match(LayerfileParser.RUN_DATA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public run_repeatable(): Run_repeatableContext {
		let _localctx: Run_repeatableContext = new Run_repeatableContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LayerfileParser.RULE_run_repeatable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(LayerfileParser.RUN_REPEATABLE);
			this.state = 110;
			this.match(LayerfileParser.RUN_DATA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public secret_env(): Secret_envContext {
		let _localctx: Secret_envContext = new Secret_envContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LayerfileParser.RULE_secret_env);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(LayerfileParser.SECRET_ENV);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.SECRET_ENV_VALUE) {
				{
				{
				this.state = 113;
				this.match(LayerfileParser.SECRET_ENV_VALUE);
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 119;
			this.match(LayerfileParser.SECRET_ENV_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setup_file(): Setup_fileContext {
		let _localctx: Setup_fileContext = new Setup_fileContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LayerfileParser.RULE_setup_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(LayerfileParser.SETUP_FILE);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.FILE) {
				{
				{
				this.state = 122;
				this.match(LayerfileParser.FILE);
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 128;
			this.match(LayerfileParser.END_OF_FILES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public skip_remain_if(): Skip_remain_ifContext {
		let _localctx: Skip_remain_ifContext = new Skip_remain_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LayerfileParser.RULE_skip_remain_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(LayerfileParser.SKIP_REMAINING_IF);
			this.state = 131;
			this.match(LayerfileParser.SKIP_REMAINING_IF_VALUE);
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.SKIP_REMAINING_IF_AND) {
				{
				{
				this.state = 132;
				this.match(LayerfileParser.SKIP_REMAINING_IF_AND);
				this.state = 133;
				this.match(LayerfileParser.SKIP_REMAINING_IF_VALUE);
				}
				}
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 139;
			this.match(LayerfileParser.SKIP_REMAINING_IF_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public split(): SplitContext {
		let _localctx: SplitContext = new SplitContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LayerfileParser.RULE_split);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(LayerfileParser.SPLIT);
			this.state = 142;
			this.match(LayerfileParser.SPLIT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expose_website(): Expose_websiteContext {
		let _localctx: Expose_websiteContext = new Expose_websiteContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LayerfileParser.RULE_expose_website);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(LayerfileParser.EXPOSE_WEBSITE);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.WEBSITE_ITEM) {
				{
				{
				this.state = 145;
				this.match(LayerfileParser.WEBSITE_ITEM);
				}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 151;
			this.match(LayerfileParser.WEBSITE_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public user(): UserContext {
		let _localctx: UserContext = new UserContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LayerfileParser.RULE_user);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(LayerfileParser.USER);
			this.state = 154;
			this.match(LayerfileParser.USER_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wait(): WaitContext {
		let _localctx: WaitContext = new WaitContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LayerfileParser.RULE_wait);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(LayerfileParser.WAIT);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.FILE) {
				{
				{
				this.state = 157;
				this.match(LayerfileParser.FILE);
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 163;
			this.match(LayerfileParser.END_OF_FILES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public workdir(): WorkdirContext {
		let _localctx: WorkdirContext = new WorkdirContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LayerfileParser.RULE_workdir);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(LayerfileParser.WORKDIR);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.FILE) {
				{
				{
				this.state = 166;
				this.match(LayerfileParser.FILE);
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 172;
			this.match(LayerfileParser.END_OF_FILES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, LayerfileParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(LayerfileParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public layerfile(): LayerfileContext {
		let _localctx: LayerfileContext = new LayerfileContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LayerfileParser.RULE_layerfile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 198;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 176;
					this.button();
					}
					break;

				case 2:
					{
					this.state = 177;
					this.cache();
					}
					break;

				case 3:
					{
					this.state = 178;
					this.checkpoint();
					}
					break;

				case 4:
					{
					this.state = 179;
					this.from();
					}
					break;

				case 5:
					{
					this.state = 180;
					this.clone();
					}
					break;

				case 6:
					{
					this.state = 181;
					this.copy();
					}
					break;

				case 7:
					{
					this.state = 182;
					this.env();
					}
					break;

				case 8:
					{
					this.state = 183;
					this.build_env();
					}
					break;

				case 9:
					{
					this.state = 184;
					this.from();
					}
					break;

				case 10:
					{
					this.state = 185;
					this.memory();
					}
					break;

				case 11:
					{
					this.state = 186;
					this.run();
					}
					break;

				case 12:
					{
					this.state = 187;
					this.run_background();
					}
					break;

				case 13:
					{
					this.state = 188;
					this.run_repeatable();
					}
					break;

				case 14:
					{
					this.state = 189;
					this.secret_env();
					}
					break;

				case 15:
					{
					this.state = 190;
					this.setup_file();
					}
					break;

				case 16:
					{
					this.state = 191;
					this.skip_remain_if();
					}
					break;

				case 17:
					{
					this.state = 192;
					this.split();
					}
					break;

				case 18:
					{
					this.state = 193;
					this.expose_website();
					}
					break;

				case 19:
					{
					this.state = 194;
					this.user();
					}
					break;

				case 20:
					{
					this.state = 195;
					this.wait();
					}
					break;

				case 21:
					{
					this.state = 196;
					this.workdir();
					}
					break;

				case 22:
					{
					this.state = 197;
					this.comment();
					}
					break;
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LayerfileParser.COMMENT) | (1 << LayerfileParser.BUTTON) | (1 << LayerfileParser.CACHE) | (1 << LayerfileParser.CHECKPOINT) | (1 << LayerfileParser.CLONE) | (1 << LayerfileParser.COPY) | (1 << LayerfileParser.ENV) | (1 << LayerfileParser.BUILD_ENV) | (1 << LayerfileParser.FROM) | (1 << LayerfileParser.MEMORY) | (1 << LayerfileParser.RUN) | (1 << LayerfileParser.RUN_BACKGROUND) | (1 << LayerfileParser.RUN_REPEATABLE) | (1 << LayerfileParser.SECRET_ENV) | (1 << LayerfileParser.SETUP_FILE) | (1 << LayerfileParser.SKIP_REMAINING_IF) | (1 << LayerfileParser.SPLIT) | (1 << LayerfileParser.EXPOSE_WEBSITE) | (1 << LayerfileParser.USER) | (1 << LayerfileParser.WAIT) | (1 << LayerfileParser.WORKDIR))) !== 0));
			this.state = 202;
			this.match(LayerfileParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03D\xCF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x07\x034\n\x03\f\x03\x0E\x037\v\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04=\n\x04\f\x04\x0E\x04@\v\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x07\x05F\n\x05\f\x05\x0E\x05I\v\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x07\x07" +
		"T\n\x07\f\x07\x0E\x07W\v\x07\x03\x07\x03\x07\x03\b\x03\b\x07\b]\n\b\f" +
		"\b\x0E\b`\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0Eu" +
		"\n\x0E\f\x0E\x0E\x0Ex\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x07\x0F~\n" +
		"\x0F\f\x0F\x0E\x0F\x81\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x07\x10\x89\n\x10\f\x10\x0E\x10\x8C\v\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x07\x12\x95\n\x12\f\x12\x0E\x12\x98\v" +
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x07\x14\xA1" +
		"\n\x14\f\x14\x0E\x14\xA4\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15" +
		"\xAA\n\x15\f\x15\x0E\x15\xAD\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x06\x17\xC9\n\x17\r\x17\x0E\x17\xCA\x03\x17" +
		"\x03\x17\x03\x17\x02\x02\x02\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02\x02\x02\xD9\x02.\x03\x02" +
		"\x02\x02\x041\x03\x02\x02\x02\x06:\x03\x02\x02\x02\bC\x03\x02\x02\x02" +
		"\nL\x03\x02\x02\x02\fQ\x03\x02\x02\x02\x0EZ\x03\x02\x02\x02\x10c\x03\x02" +
		"\x02\x02\x12f\x03\x02\x02\x02\x14i\x03\x02\x02\x02\x16l\x03\x02\x02\x02" +
		"\x18o\x03\x02\x02\x02\x1Ar\x03\x02\x02\x02\x1C{\x03\x02\x02\x02\x1E\x84" +
		"\x03\x02\x02\x02 \x8F\x03\x02\x02\x02\"\x92\x03\x02\x02\x02$\x9B\x03\x02" +
		"\x02\x02&\x9E\x03\x02\x02\x02(\xA7\x03\x02\x02\x02*\xB0\x03\x02\x02\x02" +
		",\xC8\x03\x02\x02\x02./\x07\x05\x02\x02/0\x07\x1E\x02\x020\x03\x03\x02" +
		"\x02\x0215\x07\x06\x02\x0224\x07C\x02\x0232\x03\x02\x02\x0247\x03\x02" +
		"\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x0268\x03\x02\x02\x0275\x03\x02" +
		"\x02\x0289\x07B\x02\x029\x05\x03\x02\x02\x02:>\x07\x07\x02\x02;=\x07 " +
		"\x02\x02<;\x03\x02\x02\x02=@\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02" +
		"\x02\x02?A\x03\x02\x02\x02@>\x03\x02\x02\x02AB\x07\"\x02\x02B\x07\x03" +
		"\x02\x02\x02CG\x07\b\x02\x02DF\x07#\x02\x02ED\x03\x02\x02\x02FI\x03\x02" +
		"\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HJ\x03\x02\x02\x02IG\x03\x02" +
		"\x02\x02JK\x07%\x02\x02K\t\x03\x02\x02\x02LM\x07\t\x02\x02MN\x07C\x02" +
		"\x02NO\x07C\x02\x02OP\x07B\x02\x02P\v\x03\x02\x02\x02QU\x07\n\x02\x02" +
		"RT\x07(\x02\x02SR\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02" +
		"UV\x03\x02\x02\x02VX\x03\x02\x02\x02WU\x03\x02\x02\x02XY\x07*\x02\x02" +
		"Y\r\x03\x02\x02\x02Z^\x07\v\x02\x02[]\x07\x1A\x02\x02\\[\x03\x02\x02\x02" +
		"]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02" +
		"\x02`^\x03\x02\x02\x02ab\x07\x1C\x02\x02b\x0F\x03\x02\x02\x02cd\x07\f" +
		"\x02\x02de\x070\x02\x02e\x11\x03\x02\x02\x02fg\x07\r\x02\x02gh\x073\x02" +
		"\x02h\x13\x03\x02\x02\x02ij\x07\x0E\x02\x02jk\x074\x02\x02k\x15\x03\x02" +
		"\x02\x02lm\x07\x0F\x02\x02mn\x074\x02\x02n\x17\x03\x02\x02\x02op\x07\x10" +
		"\x02\x02pq\x074\x02\x02q\x19\x03\x02\x02\x02rv\x07\x11\x02\x02su\x075" +
		"\x02\x02ts\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02" +
		"\x02\x02wy\x03\x02\x02\x02xv\x03\x02\x02\x02yz\x077\x02\x02z\x1B\x03\x02" +
		"\x02\x02{\x7F\x07\x12\x02\x02|~\x07C\x02\x02}|\x03\x02\x02\x02~\x81\x03" +
		"\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03" +
		"\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x82\x83\x07B\x02\x02\x83\x1D\x03" +
		"\x02\x02\x02\x84\x85\x07\x13\x02\x02\x85\x8A\x079\x02\x02\x86\x87\x07" +
		":\x02\x02\x87\x89\x079\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8C\x03\x02" +
		"\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8D\x03\x02" +
		"\x02\x02\x8C\x8A\x03\x02\x02\x02\x8D\x8E\x07<\x02\x02\x8E\x1F\x03\x02" +
		"\x02\x02\x8F\x90\x07\x14\x02\x02\x90\x91\x07=\x02\x02\x91!\x03\x02\x02" +
		"\x02\x92\x96\x07\x15\x02\x02\x93\x95\x07-\x02\x02\x94\x93\x03\x02\x02" +
		"\x02\x95\x98\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02" +
		"\x02\x97\x99\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x99\x9A\x07,\x02" +
		"\x02\x9A#\x03\x02\x02\x02\x9B\x9C\x07\x16\x02\x02\x9C\x9D\x07@\x02\x02" +
		"\x9D%\x03\x02\x02\x02\x9E\xA2\x07\x17\x02\x02\x9F\xA1\x07C\x02\x02\xA0" +
		"\x9F\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2" +
		"\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA5" +
		"\xA6\x07B\x02\x02\xA6\'\x03\x02\x02\x02\xA7\xAB\x07\x18\x02\x02\xA8\xAA" +
		"\x07C\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9" +
		"\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\xAB" +
		"\x03\x02\x02\x02\xAE\xAF\x07B\x02\x02\xAF)\x03\x02\x02\x02\xB0\xB1\x07" +
		"\x04\x02\x02\xB1+\x03\x02\x02\x02\xB2\xC9\x05\x02\x02\x02\xB3\xC9\x05" +
		"\x04\x03\x02\xB4\xC9\x05\x06\x04\x02\xB5\xC9\x05\x10\t\x02\xB6\xC9\x05" +
		"\b\x05\x02\xB7\xC9\x05\n\x06\x02\xB8\xC9\x05\f\x07\x02\xB9\xC9\x05\x0E" +
		"\b\x02\xBA\xC9\x05\x10\t\x02\xBB\xC9\x05\x12\n\x02\xBC\xC9\x05\x14\v\x02" +
		"\xBD\xC9\x05\x16\f\x02\xBE\xC9\x05\x18\r\x02\xBF\xC9\x05\x1A\x0E\x02\xC0" +
		"\xC9\x05\x1C\x0F\x02\xC1\xC9\x05\x1E\x10\x02\xC2\xC9\x05 \x11\x02\xC3" +
		"\xC9\x05\"\x12\x02\xC4\xC9\x05$\x13\x02\xC5\xC9\x05&\x14\x02\xC6\xC9\x05" +
		"(\x15\x02\xC7\xC9\x05*\x16\x02\xC8\xB2\x03\x02\x02\x02\xC8\xB3\x03\x02" +
		"\x02\x02\xC8\xB4\x03\x02\x02\x02\xC8\xB5\x03\x02\x02\x02\xC8\xB6\x03\x02" +
		"\x02\x02\xC8\xB7\x03\x02\x02\x02\xC8\xB8\x03\x02\x02\x02\xC8\xB9\x03\x02" +
		"\x02\x02\xC8\xBA\x03\x02\x02\x02\xC8\xBB\x03\x02\x02\x02\xC8\xBC\x03\x02" +
		"\x02\x02\xC8\xBD\x03\x02\x02\x02\xC8\xBE\x03\x02\x02\x02\xC8\xBF\x03\x02" +
		"\x02\x02\xC8\xC0\x03\x02\x02\x02\xC8\xC1\x03\x02\x02\x02\xC8\xC2\x03\x02" +
		"\x02\x02\xC8\xC3\x03\x02\x02\x02\xC8\xC4\x03\x02\x02\x02\xC8\xC5\x03\x02" +
		"\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02" +
		"\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03\x02" +
		"\x02\x02\xCC\xCD\x07\x02\x02\x03\xCD-\x03\x02\x02\x02\x0F5>GU^v\x7F\x8A" +
		"\x96\xA2\xAB\xC8\xCA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LayerfileParser.__ATN) {
			LayerfileParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LayerfileParser._serializedATN));
		}

		return LayerfileParser.__ATN;
	}

}

export class ButtonContext extends ParserRuleContext {
	public BUTTON(): TerminalNode { return this.getToken(LayerfileParser.BUTTON, 0); }
	public BUTTON_DATA(): TerminalNode { return this.getToken(LayerfileParser.BUTTON_DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_button; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterButton) {
			listener.enterButton(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitButton) {
			listener.exitButton(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitButton) {
			return visitor.visitButton(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CacheContext extends ParserRuleContext {
	public CACHE(): TerminalNode { return this.getToken(LayerfileParser.CACHE, 0); }
	public END_OF_FILES(): TerminalNode { return this.getToken(LayerfileParser.END_OF_FILES, 0); }
	public FILE(): TerminalNode[];
	public FILE(i: number): TerminalNode;
	public FILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.FILE);
		} else {
			return this.getToken(LayerfileParser.FILE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_cache; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterCache) {
			listener.enterCache(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitCache) {
			listener.exitCache(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitCache) {
			return visitor.visitCache(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CheckpointContext extends ParserRuleContext {
	public CHECKPOINT(): TerminalNode { return this.getToken(LayerfileParser.CHECKPOINT, 0); }
	public CHECKPOINT_EOL(): TerminalNode { return this.getToken(LayerfileParser.CHECKPOINT_EOL, 0); }
	public CHECKPOINT_VALUE(): TerminalNode[];
	public CHECKPOINT_VALUE(i: number): TerminalNode;
	public CHECKPOINT_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.CHECKPOINT_VALUE);
		} else {
			return this.getToken(LayerfileParser.CHECKPOINT_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_checkpoint; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterCheckpoint) {
			listener.enterCheckpoint(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitCheckpoint) {
			listener.exitCheckpoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitCheckpoint) {
			return visitor.visitCheckpoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CloneContext extends ParserRuleContext {
	public CLONE(): TerminalNode { return this.getToken(LayerfileParser.CLONE, 0); }
	public CLONE_EOL(): TerminalNode { return this.getToken(LayerfileParser.CLONE_EOL, 0); }
	public CLONE_VALUE(): TerminalNode[];
	public CLONE_VALUE(i: number): TerminalNode;
	public CLONE_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.CLONE_VALUE);
		} else {
			return this.getToken(LayerfileParser.CLONE_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_clone; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterClone) {
			listener.enterClone(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitClone) {
			listener.exitClone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitClone) {
			return visitor.visitClone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CopyContext extends ParserRuleContext {
	public COPY(): TerminalNode { return this.getToken(LayerfileParser.COPY, 0); }
	public FILE(): TerminalNode[];
	public FILE(i: number): TerminalNode;
	public FILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.FILE);
		} else {
			return this.getToken(LayerfileParser.FILE, i);
		}
	}
	public END_OF_FILES(): TerminalNode { return this.getToken(LayerfileParser.END_OF_FILES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_copy; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterCopy) {
			listener.enterCopy(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitCopy) {
			listener.exitCopy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitCopy) {
			return visitor.visitCopy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnvContext extends ParserRuleContext {
	public ENV(): TerminalNode { return this.getToken(LayerfileParser.ENV, 0); }
	public ENV_EOL(): TerminalNode { return this.getToken(LayerfileParser.ENV_EOL, 0); }
	public ENV_VALUE(): TerminalNode[];
	public ENV_VALUE(i: number): TerminalNode;
	public ENV_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.ENV_VALUE);
		} else {
			return this.getToken(LayerfileParser.ENV_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_env; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterEnv) {
			listener.enterEnv(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitEnv) {
			listener.exitEnv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitEnv) {
			return visitor.visitEnv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Build_envContext extends ParserRuleContext {
	public BUILD_ENV(): TerminalNode { return this.getToken(LayerfileParser.BUILD_ENV, 0); }
	public BUILD_ENV_EOL(): TerminalNode { return this.getToken(LayerfileParser.BUILD_ENV_EOL, 0); }
	public BUILD_ENV_VALUE(): TerminalNode[];
	public BUILD_ENV_VALUE(i: number): TerminalNode;
	public BUILD_ENV_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.BUILD_ENV_VALUE);
		} else {
			return this.getToken(LayerfileParser.BUILD_ENV_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_build_env; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterBuild_env) {
			listener.enterBuild_env(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitBuild_env) {
			listener.exitBuild_env(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitBuild_env) {
			return visitor.visitBuild_env(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(LayerfileParser.FROM, 0); }
	public FROM_DATA(): TerminalNode { return this.getToken(LayerfileParser.FROM_DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_from; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterFrom) {
			listener.enterFrom(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitFrom) {
			listener.exitFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitFrom) {
			return visitor.visitFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemoryContext extends ParserRuleContext {
	public MEMORY(): TerminalNode { return this.getToken(LayerfileParser.MEMORY, 0); }
	public MEMORY_AMOUNT(): TerminalNode { return this.getToken(LayerfileParser.MEMORY_AMOUNT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_memory; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterMemory) {
			listener.enterMemory(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitMemory) {
			listener.exitMemory(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitMemory) {
			return visitor.visitMemory(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RunContext extends ParserRuleContext {
	public RUN(): TerminalNode { return this.getToken(LayerfileParser.RUN, 0); }
	public RUN_DATA(): TerminalNode { return this.getToken(LayerfileParser.RUN_DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_run; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterRun) {
			listener.enterRun(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitRun) {
			listener.exitRun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitRun) {
			return visitor.visitRun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Run_backgroundContext extends ParserRuleContext {
	public RUN_BACKGROUND(): TerminalNode { return this.getToken(LayerfileParser.RUN_BACKGROUND, 0); }
	public RUN_DATA(): TerminalNode { return this.getToken(LayerfileParser.RUN_DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_run_background; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterRun_background) {
			listener.enterRun_background(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitRun_background) {
			listener.exitRun_background(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitRun_background) {
			return visitor.visitRun_background(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Run_repeatableContext extends ParserRuleContext {
	public RUN_REPEATABLE(): TerminalNode { return this.getToken(LayerfileParser.RUN_REPEATABLE, 0); }
	public RUN_DATA(): TerminalNode { return this.getToken(LayerfileParser.RUN_DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_run_repeatable; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterRun_repeatable) {
			listener.enterRun_repeatable(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitRun_repeatable) {
			listener.exitRun_repeatable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitRun_repeatable) {
			return visitor.visitRun_repeatable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Secret_envContext extends ParserRuleContext {
	public SECRET_ENV(): TerminalNode { return this.getToken(LayerfileParser.SECRET_ENV, 0); }
	public SECRET_ENV_EOL(): TerminalNode { return this.getToken(LayerfileParser.SECRET_ENV_EOL, 0); }
	public SECRET_ENV_VALUE(): TerminalNode[];
	public SECRET_ENV_VALUE(i: number): TerminalNode;
	public SECRET_ENV_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.SECRET_ENV_VALUE);
		} else {
			return this.getToken(LayerfileParser.SECRET_ENV_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_secret_env; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterSecret_env) {
			listener.enterSecret_env(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitSecret_env) {
			listener.exitSecret_env(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitSecret_env) {
			return visitor.visitSecret_env(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Setup_fileContext extends ParserRuleContext {
	public SETUP_FILE(): TerminalNode { return this.getToken(LayerfileParser.SETUP_FILE, 0); }
	public END_OF_FILES(): TerminalNode { return this.getToken(LayerfileParser.END_OF_FILES, 0); }
	public FILE(): TerminalNode[];
	public FILE(i: number): TerminalNode;
	public FILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.FILE);
		} else {
			return this.getToken(LayerfileParser.FILE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_setup_file; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterSetup_file) {
			listener.enterSetup_file(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitSetup_file) {
			listener.exitSetup_file(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitSetup_file) {
			return visitor.visitSetup_file(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Skip_remain_ifContext extends ParserRuleContext {
	public SKIP_REMAINING_IF(): TerminalNode { return this.getToken(LayerfileParser.SKIP_REMAINING_IF, 0); }
	public SKIP_REMAINING_IF_VALUE(): TerminalNode[];
	public SKIP_REMAINING_IF_VALUE(i: number): TerminalNode;
	public SKIP_REMAINING_IF_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.SKIP_REMAINING_IF_VALUE);
		} else {
			return this.getToken(LayerfileParser.SKIP_REMAINING_IF_VALUE, i);
		}
	}
	public SKIP_REMAINING_IF_EOL(): TerminalNode { return this.getToken(LayerfileParser.SKIP_REMAINING_IF_EOL, 0); }
	public SKIP_REMAINING_IF_AND(): TerminalNode[];
	public SKIP_REMAINING_IF_AND(i: number): TerminalNode;
	public SKIP_REMAINING_IF_AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.SKIP_REMAINING_IF_AND);
		} else {
			return this.getToken(LayerfileParser.SKIP_REMAINING_IF_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_skip_remain_if; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterSkip_remain_if) {
			listener.enterSkip_remain_if(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitSkip_remain_if) {
			listener.exitSkip_remain_if(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitSkip_remain_if) {
			return visitor.visitSkip_remain_if(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SplitContext extends ParserRuleContext {
	public SPLIT(): TerminalNode { return this.getToken(LayerfileParser.SPLIT, 0); }
	public SPLIT_NUMBER(): TerminalNode { return this.getToken(LayerfileParser.SPLIT_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_split; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterSplit) {
			listener.enterSplit(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitSplit) {
			listener.exitSplit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitSplit) {
			return visitor.visitSplit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expose_websiteContext extends ParserRuleContext {
	public EXPOSE_WEBSITE(): TerminalNode { return this.getToken(LayerfileParser.EXPOSE_WEBSITE, 0); }
	public WEBSITE_EOL(): TerminalNode { return this.getToken(LayerfileParser.WEBSITE_EOL, 0); }
	public WEBSITE_ITEM(): TerminalNode[];
	public WEBSITE_ITEM(i: number): TerminalNode;
	public WEBSITE_ITEM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.WEBSITE_ITEM);
		} else {
			return this.getToken(LayerfileParser.WEBSITE_ITEM, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_expose_website; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterExpose_website) {
			listener.enterExpose_website(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitExpose_website) {
			listener.exitExpose_website(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitExpose_website) {
			return visitor.visitExpose_website(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserContext extends ParserRuleContext {
	public USER(): TerminalNode { return this.getToken(LayerfileParser.USER, 0); }
	public USER_NAME(): TerminalNode { return this.getToken(LayerfileParser.USER_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_user; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterUser) {
			listener.enterUser(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitUser) {
			listener.exitUser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitUser) {
			return visitor.visitUser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaitContext extends ParserRuleContext {
	public WAIT(): TerminalNode { return this.getToken(LayerfileParser.WAIT, 0); }
	public END_OF_FILES(): TerminalNode { return this.getToken(LayerfileParser.END_OF_FILES, 0); }
	public FILE(): TerminalNode[];
	public FILE(i: number): TerminalNode;
	public FILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.FILE);
		} else {
			return this.getToken(LayerfileParser.FILE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_wait; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterWait) {
			listener.enterWait(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitWait) {
			listener.exitWait(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitWait) {
			return visitor.visitWait(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WorkdirContext extends ParserRuleContext {
	public WORKDIR(): TerminalNode { return this.getToken(LayerfileParser.WORKDIR, 0); }
	public END_OF_FILES(): TerminalNode { return this.getToken(LayerfileParser.END_OF_FILES, 0); }
	public FILE(): TerminalNode[];
	public FILE(i: number): TerminalNode;
	public FILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.FILE);
		} else {
			return this.getToken(LayerfileParser.FILE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_workdir; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterWorkdir) {
			listener.enterWorkdir(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitWorkdir) {
			listener.exitWorkdir(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitWorkdir) {
			return visitor.visitWorkdir(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(LayerfileParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_comment; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LayerfileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(LayerfileParser.EOF, 0); }
	public button(): ButtonContext[];
	public button(i: number): ButtonContext;
	public button(i?: number): ButtonContext | ButtonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ButtonContext);
		} else {
			return this.getRuleContext(i, ButtonContext);
		}
	}
	public cache(): CacheContext[];
	public cache(i: number): CacheContext;
	public cache(i?: number): CacheContext | CacheContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CacheContext);
		} else {
			return this.getRuleContext(i, CacheContext);
		}
	}
	public checkpoint(): CheckpointContext[];
	public checkpoint(i: number): CheckpointContext;
	public checkpoint(i?: number): CheckpointContext | CheckpointContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CheckpointContext);
		} else {
			return this.getRuleContext(i, CheckpointContext);
		}
	}
	public from(): FromContext[];
	public from(i: number): FromContext;
	public from(i?: number): FromContext | FromContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FromContext);
		} else {
			return this.getRuleContext(i, FromContext);
		}
	}
	public clone(): CloneContext[];
	public clone(i: number): CloneContext;
	public clone(i?: number): CloneContext | CloneContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CloneContext);
		} else {
			return this.getRuleContext(i, CloneContext);
		}
	}
	public copy(): CopyContext[];
	public copy(i: number): CopyContext;
	public copy(i?: number): CopyContext | CopyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CopyContext);
		} else {
			return this.getRuleContext(i, CopyContext);
		}
	}
	public env(): EnvContext[];
	public env(i: number): EnvContext;
	public env(i?: number): EnvContext | EnvContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnvContext);
		} else {
			return this.getRuleContext(i, EnvContext);
		}
	}
	public build_env(): Build_envContext[];
	public build_env(i: number): Build_envContext;
	public build_env(i?: number): Build_envContext | Build_envContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Build_envContext);
		} else {
			return this.getRuleContext(i, Build_envContext);
		}
	}
	public memory(): MemoryContext[];
	public memory(i: number): MemoryContext;
	public memory(i?: number): MemoryContext | MemoryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemoryContext);
		} else {
			return this.getRuleContext(i, MemoryContext);
		}
	}
	public run(): RunContext[];
	public run(i: number): RunContext;
	public run(i?: number): RunContext | RunContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RunContext);
		} else {
			return this.getRuleContext(i, RunContext);
		}
	}
	public run_background(): Run_backgroundContext[];
	public run_background(i: number): Run_backgroundContext;
	public run_background(i?: number): Run_backgroundContext | Run_backgroundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Run_backgroundContext);
		} else {
			return this.getRuleContext(i, Run_backgroundContext);
		}
	}
	public run_repeatable(): Run_repeatableContext[];
	public run_repeatable(i: number): Run_repeatableContext;
	public run_repeatable(i?: number): Run_repeatableContext | Run_repeatableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Run_repeatableContext);
		} else {
			return this.getRuleContext(i, Run_repeatableContext);
		}
	}
	public secret_env(): Secret_envContext[];
	public secret_env(i: number): Secret_envContext;
	public secret_env(i?: number): Secret_envContext | Secret_envContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Secret_envContext);
		} else {
			return this.getRuleContext(i, Secret_envContext);
		}
	}
	public setup_file(): Setup_fileContext[];
	public setup_file(i: number): Setup_fileContext;
	public setup_file(i?: number): Setup_fileContext | Setup_fileContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Setup_fileContext);
		} else {
			return this.getRuleContext(i, Setup_fileContext);
		}
	}
	public skip_remain_if(): Skip_remain_ifContext[];
	public skip_remain_if(i: number): Skip_remain_ifContext;
	public skip_remain_if(i?: number): Skip_remain_ifContext | Skip_remain_ifContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Skip_remain_ifContext);
		} else {
			return this.getRuleContext(i, Skip_remain_ifContext);
		}
	}
	public split(): SplitContext[];
	public split(i: number): SplitContext;
	public split(i?: number): SplitContext | SplitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SplitContext);
		} else {
			return this.getRuleContext(i, SplitContext);
		}
	}
	public expose_website(): Expose_websiteContext[];
	public expose_website(i: number): Expose_websiteContext;
	public expose_website(i?: number): Expose_websiteContext | Expose_websiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Expose_websiteContext);
		} else {
			return this.getRuleContext(i, Expose_websiteContext);
		}
	}
	public user(): UserContext[];
	public user(i: number): UserContext;
	public user(i?: number): UserContext | UserContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserContext);
		} else {
			return this.getRuleContext(i, UserContext);
		}
	}
	public wait(): WaitContext[];
	public wait(i: number): WaitContext;
	public wait(i?: number): WaitContext | WaitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WaitContext);
		} else {
			return this.getRuleContext(i, WaitContext);
		}
	}
	public workdir(): WorkdirContext[];
	public workdir(i: number): WorkdirContext;
	public workdir(i?: number): WorkdirContext | WorkdirContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WorkdirContext);
		} else {
			return this.getRuleContext(i, WorkdirContext);
		}
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_layerfile; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterLayerfile) {
			listener.enterLayerfile(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitLayerfile) {
			listener.exitLayerfile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LayerfileParserVisitor<Result>): Result {
		if (visitor.visitLayerfile) {
			return visitor.visitLayerfile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


