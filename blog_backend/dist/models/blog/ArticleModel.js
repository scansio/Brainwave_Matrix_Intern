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
exports.ArticleSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const TimestampsPlugin_1 = __importDefault(require("../plugins/TimestampsPlugin"));
const UserModel_1 = __importDefault(require("../UserModel"));
exports.ArticleSchema = new mongoose_1.Schema({
    author: {
        type: Number,
        ref: UserModel_1.default.modelName,
        required: [true, 'Author ID is required'],
    },
    slug: {
        type: String,
        required: [true, 'Slug: Nice looking readable url like pattern is required'],
    },
    content: {
        type: String,
        required: [true, 'Article body is required'],
    },
    like: Number,
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    coverImageUrl: {
        type: String,
        required: [true, 'Cover image is required'],
    },
    seoDescription: {
        type: String,
        required: [true, 'Seo description is required'],
    },
});
const ArticleModel = mongoose_1.default.model('Article', (0, TimestampsPlugin_1.default)(exports.ArticleSchema));
exports.default = ArticleModel;
