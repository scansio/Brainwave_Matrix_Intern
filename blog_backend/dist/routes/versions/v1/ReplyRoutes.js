"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../common");
const constants_1 = require("../../../configs/constants");
const Reply_1 = __importDefault(require("../../../controllers/blog/Reply"));
const ReplyModel_1 = require("../../../models/blog/ReplyModel");
const RequestMethods_1 = require("../../RequestMethods");
const ReplyRoutes = {
    tag: 'Reply',
    controller: Reply_1.default,
    baseUrl: '/reply',
    routes: [
        {
            path: '/reply/all',
            validation: { query: { q: {} } },
            controllerMemberFunctionIdentifier: Reply_1.default.prototype.all,
            method: RequestMethods_1.RequestMethods.GET,
            metadata: {
                summary: 'Get all replys',
            },
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
        },
        {
            path: '/reply/:id([0-9a-fA-F]{24})',
            validation: {
                param: {
                    id: {
                        notEmpty: {},
                    },
                },
            },
            method: RequestMethods_1.RequestMethods.GET,
            metadata: {
                summary: 'Get reply by id',
            },
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
        },
        {
            path: '/reply',
            method: RequestMethods_1.RequestMethods.POST,
            metadata: {
                summary: 'Create reply',
            },
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
        },
        {
            path: '/reply',
            method: RequestMethods_1.RequestMethods.PATCH,
            metadata: {
                summary: 'Update reply',
            },
            requireAuthentication: constants_1.AuthenticationLevel.ADMIN,
        },
        {
            path: '/reply/:id([0-9a-fA-F]{24})',
            validation: {
                param: {
                    id: {
                        notEmpty: {},
                    },
                },
            },
            method: RequestMethods_1.RequestMethods.DELETE,
            metadata: {
                summary: 'Delete reply',
            },
            requireAuthentication: constants_1.AuthenticationLevel.ADMIN,
        },
    ],
    schema: (0, common_1.getObject)(ReplyModel_1.ReplySchema),
    description: 'Operation on reply',
};
exports.default = ReplyRoutes;
