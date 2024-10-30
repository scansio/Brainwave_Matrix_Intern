"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const TimestampsPlugin_1 = __importDefault(require("../plugins/TimestampsPlugin"));
const ArticleModel_1 = __importDefault(require("./ArticleModel"));
exports.CommentSchema = new mongoose_1.Schema({
    articleId: {
        type: Number,
        ref: ArticleModel_1.default.modelName,
        required: [true, 'Article ID is required'],
    },
    replyIds: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'Reply',
    },
    content: {
        type: String,
        required: [true, 'Comment body is required'],
    },
    like: Number,
});
const CommentModel = mongoose_1.default.model('Comment', (0, TimestampsPlugin_1.default)(exports.CommentSchema));
exports.default = CommentModel;
