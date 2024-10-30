"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../common");
const constants_1 = require("../../../configs/constants");
const Tag_1 = __importDefault(require("../../../controllers/blog/Tag"));
const TagModel_1 = require("../../../models/blog/TagModel");
const RequestMethods_1 = require("../../RequestMethods");
const TagRoutes = {
    tag: 'Tag',
    controller: Tag_1.default,
    baseUrl: '/tag',
    routes: [
        {
            path: '/tag/all',
            validation: { query: { q: {} } },
            controllerMemberFunctionIdentifier: Tag_1.default.prototype.all,
            method: RequestMethods_1.RequestMethods.GET,
            metadata: {
                summary: 'Get all tags',
            },
        },
        {
            path: '/tag/:id([0-9a-fA-F]{24})',
            validation: {
                param: {
                    id: {
                        notEmpty: {},
                    },
                },
            },
            method: RequestMethods_1.RequestMethods.GET,
            metadata: {
                summary: 'Get tag by id',
            },
        },
        {
            path: '/tag',
            method: RequestMethods_1.RequestMethods.POST,
            metadata: {
                summary: 'Create tag',
            },
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
        },
        {
            path: '/tag',
            method: RequestMethods_1.RequestMethods.PATCH,
            metadata: {
                summary: 'Update tag',
            },
            requireAuthentication: constants_1.AuthenticationLevel.END_USER,
        },
        {
            path: '/tag/:id([0-9a-fA-F]{24})',
            validation: {
                param: {
                    id: {
                        notEmpty: {},
                    },
                },
            },
            method: RequestMethods_1.RequestMethods.DELETE,
            metadata: {
                summary: 'Delete tag',
            },
            requireAuthentication: constants_1.AuthenticationLevel.ADMIN,
        },
    ],
    schema: (0, common_1.getObject)(TagModel_1.TagSchema),
    description: 'Operation on tag',
};
exports.default = TagRoutes;
