"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../common");
const statusCodeConstants_1 = require("../../configs/statusCodeConstants");
const ArticleModel_1 = __importDefault(require("../../models/blog/ArticleModel"));
const PaginatingModel_1 = __importDefault(require("../../models/PaginatingModel"));
const BaseController_1 = __importDefault(require("../base/BaseController"));
class Article extends BaseController_1.default {
    constructor(req, res, next) {
        super(req, res, next);
    }
    async init() {
        return true;
    }
    async get({ id }) {
        const found = await ArticleModel_1.default.findById(`${id}`).exec();
        if (!found)
            this.status(false).statusCode(statusCodeConstants_1.NOTFOUND).message('Article not found').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.GET_SUCCESS).data('Article', found).send();
    }
    async all() {
        const Articles = await new PaginatingModel_1.default(ArticleModel_1.default, this).makePublic(true).exec();
        if (!Articles)
            this.status(false).statusCode(statusCodeConstants_1.NOTFOUND).message('No Articles').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.GET_SUCCESS).data('Articles', Articles).send();
    }
    async create({ slug, content, title, coverImageUrl, seoDescription }) {
        const created = await ArticleModel_1.default.create({
            author: this.user._id,
            slug,
            content: !content ? content : (0, common_1.sanitizeHTML)(content),
            title,
            coverImageUrl,
            seoDescription,
        });
        if (!created)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Error creating Article').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Article created').data('created', created).send();
    }
    async update({ id, author, slug, content, like, title, coverImageUrl, seoDescription, status }) {
        const definedValues = (0, common_1.getDefinedValuesFrom)({
            author,
            slug,
            content: !content ? content : (0, common_1.sanitizeHTML)(content),
            like,
            title,
            coverImageUrl,
            seoDescription,
            status,
        });
        const updated = await ArticleModel_1.default.findByIdAndUpdate(id, definedValues, {
            new: true,
        }).exec();
        if (!updated)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Article failed to update due to error').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Article updated').data('update', updated).send();
    }
    async delete({ id }) {
        const deleted = await ArticleModel_1.default.findByIdAndDelete(id).exec();
        if (!deleted)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Article failed to be deleted do to error').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Article deleted').data('deleted', deleted).send();
    }
}
exports.default = Article;
