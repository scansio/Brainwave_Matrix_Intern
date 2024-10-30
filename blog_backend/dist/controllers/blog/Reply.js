"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../common");
const statusCodeConstants_1 = require("../../configs/statusCodeConstants");
const ReplyModel_1 = __importDefault(require("../../models/blog/ReplyModel"));
const PaginatingModel_1 = __importDefault(require("../../models/PaginatingModel"));
const BaseController_1 = __importDefault(require("../base/BaseController"));
class Reply extends BaseController_1.default {
    constructor(req, res, next) {
        super(req, res, next);
    }
    async init() {
        return true;
    }
    async get({ id }) {
        const found = await ReplyModel_1.default.findById(`${id}`).exec();
        if (!found)
            this.status(false).statusCode(statusCodeConstants_1.NOTFOUND).message('Reply not found').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.GET_SUCCESS).data('Reply', found).send();
    }
    async all() {
        const Replys = await new PaginatingModel_1.default(ReplyModel_1.default, this).makePublic(true).exec();
        if (!Replys)
            this.status(false).statusCode(statusCodeConstants_1.NOTFOUND).message('No Replys').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.GET_SUCCESS).data('Replys', Replys).send();
    }
    async create({ commentId, content }) {
        const created = await ReplyModel_1.default.create({
            commentId,
            content,
        });
        if (!created)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Error creating Reply').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Reply created').data('created', created).send();
    }
    async update({ id, commentId, content, like, status }) {
        const definedValues = (0, common_1.getDefinedValuesFrom)({
            commentId,
            content,
            like,
            status,
        });
        const updated = await ReplyModel_1.default.findByIdAndUpdate(id, definedValues, {
            new: true,
        }).exec();
        if (!updated)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Reply failed to update due to error').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Reply updated').data('update', updated).send();
    }
    async delete({ id }) {
        const deleted = await ReplyModel_1.default.findByIdAndDelete(id).exec();
        if (!deleted)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Reply failed to be deleted do to error').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Reply deleted').data('deleted', deleted).send();
    }
}
exports.default = Reply;
