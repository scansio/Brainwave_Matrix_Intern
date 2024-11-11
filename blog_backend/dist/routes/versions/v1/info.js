"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const APIVersionStatus_1 = require("../../APIVersionStatus");
const constants_1 = require("../../../configs/constants");
(0, dotenv_1.config)();
const info = {
    title: 'Blog API',
    description: 'API for Blogging platform',
    version: 'v1',
    servers: [process.env.MAIN_SERVER_URL || '/main'],
    status: APIVersionStatus_1.APIVersionStatus.ENABLED,
    miscModel: {
        AuthenticationLevel: constants_1.AuthenticationLevel,
    },
};
exports.default = info;
