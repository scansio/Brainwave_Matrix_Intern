"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../common");
const statusCodeConstants_1 = require("../../configs/statusCodeConstants");
const TagModel_1 = __importDefault(require("../../models/blog/TagModel"));
const PaginatingModel_1 = __importDefault(require("../../models/PaginatingModel"));
const BaseController_1 = __importDefault(require("../base/BaseController"));
class Tag extends BaseController_1.default {
    constructor(req, res, next) {
        super(req, res, next);
    }
    async init() {
        return true;
    }
    async get({ id }) {
        const found = await TagModel_1.default.findById(`${id}`).exec();
        if (!found)
            this.status(false).statusCode(statusCodeConstants_1.NOTFOUND).message('Tag not found').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.GET_SUCCESS).data('Tag', found).send();
    }
    async all() {
        const Tags = await new PaginatingModel_1.default(TagModel_1.default, this).makePublic(true).exec();
        if (!Tags)
            this.status(false).statusCode(statusCodeConstants_1.NOTFOUND).message('No Tags').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.GET_SUCCESS).data('Tags', Tags).send();
    }
    async create({ name }) {
        const created = await TagModel_1.default.create({
            name,
        });
        if (!created)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Error creating Tag').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Tag created').data('created', created).send();
    }
    async update({ id, name, status }) {
        const definedValues = (0, common_1.getDefinedValuesFrom)({
            name,
            status,
        });
        const updated = await TagModel_1.default.findByIdAndUpdate(id, definedValues, {
            new: true,
        }).exec();
        if (!updated)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Tag failed to update due to error').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Tag updated').data('update', updated).send();
    }
    async delete({ id }) {
        const deleted = await TagModel_1.default.findByIdAndDelete(id).exec();
        if (!deleted)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Tag failed to be deleted do to error').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Tag deleted').data('deleted', deleted).send();
    }
}
exports.default = Tag;
