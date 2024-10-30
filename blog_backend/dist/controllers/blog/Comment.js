"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../common");
const statusCodeConstants_1 = require("../../configs/statusCodeConstants");
const CommentModel_1 = __importDefault(require("../../models/blog/CommentModel"));
const PaginatingModel_1 = __importDefault(require("../../models/PaginatingModel"));
const BaseController_1 = __importDefault(require("../base/BaseController"));
class Comment extends BaseController_1.default {
    constructor(req, res, next) {
        super(req, res, next);
    }
    async init() {
        return true;
    }
    async get({ id }) {
        const found = await CommentModel_1.default.findById(`${id}`).exec();
        if (!found)
            this.status(false).statusCode(statusCodeConstants_1.NOTFOUND).message('Comment not found').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.GET_SUCCESS).data('Comment', found).send();
    }
    async all() {
        const Comments = await new PaginatingModel_1.default(CommentModel_1.default, this).makePublic(true).exec();
        if (!Comments)
            this.status(false).statusCode(statusCodeConstants_1.NOTFOUND).message('No Comments').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.GET_SUCCESS).data('Comments', Comments).send();
    }
    async create({ articleId, content }) {
        const created = await CommentModel_1.default.create({
            articleId,
            content,
        });
        if (!created)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Error creating Comment').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Comment created').data('created', created).send();
    }
    async update({ id, articleId, replyIds, content, like, status }) {
        const definedValues = (0, common_1.getDefinedValuesFrom)({
            articleId,
            replyIds,
            content,
            like,
            status,
        });
        const updated = await CommentModel_1.default.findByIdAndUpdate(id, definedValues, {
            new: true,
        }).exec();
        if (!updated)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Comment failed to update due to error').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Comment updated').data('update', updated).send();
    }
    async delete({ id }) {
        const deleted = await CommentModel_1.default.findByIdAndDelete(id).exec();
        if (!deleted)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Comment failed to be deleted do to error').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Comment deleted').data('deleted', deleted).send();
    }
}
exports.default = Comment;
