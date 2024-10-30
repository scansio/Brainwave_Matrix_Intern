"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../common");
const constants_1 = require("../../../configs/constants");
const Newsletter_1 = __importDefault(require("../../../controllers/blog/Newsletter"));
const NewsletterModel_1 = require("../../../models/blog/NewsletterModel");
const RequestMethods_1 = require("../../RequestMethods");
const NewsletterRoutes = {
    tag: 'Newsletter',
    controller: Newsletter_1.default,
    baseUrl: '/newsletter',
    routes: [
        {
            path: '/newsletter/all',
            validation: { query: { q: {} } },
            controllerMemberFunctionIdentifier: Newsletter_1.default.prototype.all,
            method: RequestMethods_1.RequestMethods.GET,
            metadata: {
                summary: 'Get all newsletters',
            },
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
        },
        {
            path: '/newsletter/:id([0-9a-fA-F]{24})',
            validation: {
                param: {
                    id: {
                        notEmpty: {},
                    },
                },
            },
            method: RequestMethods_1.RequestMethods.GET,
            metadata: {
                summary: 'Get newsletter by id',
            },
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
        },
        {
            path: '/newsletter',
            method: RequestMethods_1.RequestMethods.POST,
            metadata: {
                summary: 'Create newsletter',
            },
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
        },
        {
            path: '/newsletter',
            method: RequestMethods_1.RequestMethods.PATCH,
            metadata: {
                summary: 'Update newsletter',
            },
            requireAuthentication: constants_1.AuthenticationLevel.ADMIN,
        },
        {
            path: '/newsletter/:id([0-9a-fA-F]{24})',
            validation: {
                param: {
                    id: {
                        notEmpty: {},
                    },
                },
            },
            method: RequestMethods_1.RequestMethods.DELETE,
            metadata: {
                summary: 'Delete newsletter',
            },
            requireAuthentication: constants_1.AuthenticationLevel.ADMIN,
        },
    ],
    schema: (0, common_1.getObject)(NewsletterModel_1.NewsletterSchema),
    description: 'Operation on newsletter',
};
exports.default = NewsletterRoutes;
