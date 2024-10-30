"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../common");
const constants_1 = require("../../../configs/constants");
const Comment_1 = __importDefault(require("../../../controllers/blog/Comment"));
const CommentModel_1 = require("../../../models/blog/CommentModel");
const RequestMethods_1 = require("../../RequestMethods");
const CommentRoutes = {
    tag: 'Comment',
    controller: Comment_1.default,
    baseUrl: '/article',
    routes: [
        {
            path: '/article/all',
            validation: { query: { q: {} } },
            controllerMemberFunctionIdentifier: Comment_1.default.prototype.all,
            method: RequestMethods_1.RequestMethods.GET,
            metadata: {
                summary: 'Get all articles',
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
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
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
            requireAuthentication: constants_1.AuthenticationLevel.ADMIN,
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
    schema: (0, common_1.getObject)(CommentModel_1.CommentSchema),
    description: 'Operation on article',
};
exports.default = CommentRoutes;
