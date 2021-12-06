// Generated from LayerfileParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ButtonContext } from "./LayerfileParser";
import { CacheContext } from "./LayerfileParser";
import { CheckpointContext } from "./LayerfileParser";
import { CloneContext } from "./LayerfileParser";
import { CopyContext } from "./LayerfileParser";
import { EnvContext } from "./LayerfileParser";
import { Build_envContext } from "./LayerfileParser";
import { FromContext } from "./LayerfileParser";
import { MemoryContext } from "./LayerfileParser";
import { RunContext } from "./LayerfileParser";
import { Run_backgroundContext } from "./LayerfileParser";
import { Run_repeatableContext } from "./LayerfileParser";
import { Secret_envContext } from "./LayerfileParser";
import { Setup_fileContext } from "./LayerfileParser";
import { Skip_remain_ifContext } from "./LayerfileParser";
import { SplitContext } from "./LayerfileParser";
import { Expose_websiteContext } from "./LayerfileParser";
import { UserContext } from "./LayerfileParser";
import { WaitContext } from "./LayerfileParser";
import { WorkdirContext } from "./LayerfileParser";
import { CommentContext } from "./LayerfileParser";
import { LayerfileContext } from "./LayerfileParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LayerfileParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LayerfileParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LayerfileParser.button`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitButton?: (ctx: ButtonContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.cache`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCache?: (ctx: CacheContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.checkpoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckpoint?: (ctx: CheckpointContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.clone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClone?: (ctx: CloneContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.copy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopy?: (ctx: CopyContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.env`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnv?: (ctx: EnvContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.build_env`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuild_env?: (ctx: Build_envContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.from`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom?: (ctx: FromContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.memory`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemory?: (ctx: MemoryContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.run`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRun?: (ctx: RunContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.run_background`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRun_background?: (ctx: Run_backgroundContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.run_repeatable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRun_repeatable?: (ctx: Run_repeatableContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.secret_env`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecret_env?: (ctx: Secret_envContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.setup_file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetup_file?: (ctx: Setup_fileContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.skip_remain_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkip_remain_if?: (ctx: Skip_remain_ifContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.split`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSplit?: (ctx: SplitContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.expose_website`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpose_website?: (ctx: Expose_websiteContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.user`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUser?: (ctx: UserContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.wait`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWait?: (ctx: WaitContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.workdir`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWorkdir?: (ctx: WorkdirContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `LayerfileParser.layerfile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayerfile?: (ctx: LayerfileContext) => Result;
}

