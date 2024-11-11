"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverConfig = {
    SCHEDULING_SERVER: {
        scheme: 'scheduling',
        port: 6098,
    },
    MAIN_SERVER: {
        scheme: 'main',
        port: 3003,
    },
    REPO_HOOK_SERVER: {
        scheme: 'hook',
        port: 3002,
    },
    CDN_SERVER: {
        scheme: 'cdn',
        port: 2024,
    },
    SOCKET_SERVER: {
        scheme: 'socket',
        port: 2025,
    },
};
exports.default = serverConfig;
