"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../common");
const constants_1 = require("../../../configs/constants");
const Article_1 = __importDefault(require("../../../controllers/blog/Article"));
const ArticleModel_1 = require("../../../models/blog/ArticleModel");
const RequestMethods_1 = require("../../RequestMethods");
const ArticleRoutes = {
    tag: 'Article',
    controller: Article_1.default,
    baseUrl: '/article',
    routes: [
        {
            path: '/article/all',
            validation: { query: { q: {} } },
            controllerMemberFunctionIdentifier: Article_1.default.prototype.all,
            method: RequestMethods_1.RequestMethods.GET,
            metadata: {
                summary: 'Get all articles',
            },
        },
        {
            path: '/article/slug/:slug',
            validation: { param: { slug: {} } },
            controllerMemberFunctionIdentifier: Article_1.default.prototype.slug,
            method: RequestMethods_1.RequestMethods.GET,
            metadata: {
                summary: 'Get an article by slug',
            },
        },
        {
            path: '/article/like/:id([0-9a-fA-F]{24})',
            controllerMemberFunctionIdentifier: Article_1.default.prototype.like,
            validation: {
                param: {
                    id: {
                        notEmpty: {},
                    },
                },
            },
            method: RequestMethods_1.RequestMethods.GET,
            metadata: {
                summary: 'Like a Article by id',
            },
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
        },
        {
            path: '/article/:id([0-9a-fA-F]{24})',
            validation: {
                param: {
                    id: {
                        notEmpty: {},
                    },
                },
            },
            method: RequestMethods_1.RequestMethods.GET,
            metadata: {
                summary: 'Get article by id',
            },
        },
        {
            path: '/article/read',
            method: RequestMethods_1.RequestMethods.POST,
            controllerMemberFunctionIdentifier: Article_1.default.prototype.read,
            metadata: {
                summary: 'Mark article read for a user',
            },
        },
        {
            path: '/article',
            method: RequestMethods_1.RequestMethods.POST,
            metadata: {
                summary: 'Create article',
            },
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
        },
        {
            path: '/article',
            method: RequestMethods_1.RequestMethods.PATCH,
            metadata: {
                summary: 'Update article',
            },
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
        },
        {
            path: '/article/:id([0-9a-fA-F]{24})',
            validation: {
                param: {
                    id: {
                        notEmpty: {},
                    },
                },
            },
            method: RequestMethods_1.RequestMethods.DELETE,
            metadata: {
                summary: 'Delete article',
            },
            requireAuthentication: constants_1.AuthenticationLevel.ADMIN,
        },
    ],
    schema: (0, common_1.getObject)(ArticleModel_1.ArticleSchema),
    description: 'Operation on article',
};
exports.default = ArticleRoutes;
