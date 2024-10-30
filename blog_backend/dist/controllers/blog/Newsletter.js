"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../common");
const statusCodeConstants_1 = require("../../configs/statusCodeConstants");
const NewsletterModel_1 = __importDefault(require("../../models/blog/NewsletterModel"));
const PaginatingModel_1 = __importDefault(require("../../models/PaginatingModel"));
const BaseController_1 = __importDefault(require("../base/BaseController"));
class Newsletter extends BaseController_1.default {
    constructor(req, res, next) {
        super(req, res, next);
    }
    async init() {
        return true;
    }
    async get({ id }) {
        const found = await NewsletterModel_1.default.findById(`${id}`).exec();
        if (!found)
            this.status(false).statusCode(statusCodeConstants_1.NOTFOUND).message('Newsletter not found').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.GET_SUCCESS).data('Newsletter', found).send();
    }
    async all() {
        const Newsletters = await new PaginatingModel_1.default(NewsletterModel_1.default, this).makePublic(true).exec();
        if (!Newsletters)
            this.status(false).statusCode(statusCodeConstants_1.NOTFOUND).message('No Newsletters').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.GET_SUCCESS).data('Newsletters', Newsletters).send();
    }
    async create({ email, interestTagIds }) {
        const created = await NewsletterModel_1.default.create({
            email,
            interestTagIds,
        });
        if (!created)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Error creating Newsletter').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Newsletter created').data('created', created).send();
    }
    async update({ id, email, interestTagIds, status }) {
        const definedValues = (0, common_1.getDefinedValuesFrom)({
            email,
            interestTagIds,
            status,
        });
        const updated = await NewsletterModel_1.default.findByIdAndUpdate(id, definedValues, {
            new: true,
        }).exec();
        if (!updated)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Newsletter failed to update due to error').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Newsletter updated').data('update', updated).send();
    }
    async delete({ id }) {
        const deleted = await NewsletterModel_1.default.findByIdAndDelete(id).exec();
        if (!deleted)
            this.status(false).statusCode(statusCodeConstants_1.BAD_REQUEST).message('Newsletter failed to be deleted do to error').send();
        else
            this.status(true).statusCode(statusCodeConstants_1.POST_SUCCESS).message('Newsletter deleted').data('deleted', deleted).send();
    }
}
exports.default = Newsletter;
