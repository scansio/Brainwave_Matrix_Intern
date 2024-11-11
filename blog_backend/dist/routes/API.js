"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const promises_1 = require("fs/promises");
const API = [];
const versionsDir = (0, path_1.resolve)(__dirname, 'versions');
for (const dir of (0, fs_1.readdirSync)(versionsDir)) {
    const dirPath = (0, path_1.resolve)(versionsDir, dir);
    const controllerRoutes = [];
    let info = null;
    for (const filename of (0, fs_1.readdirSync)(dirPath)) {
        if (filename.endsWith('.js')) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const fetch = () => require((0, path_1.resolve)(dirPath, filename)).default;
            if (filename === 'info.js') {
                info = fetch();
            }
            else {
                controllerRoutes.push(fetch());
            }
        }
    }
    if (info) {
        API.push({ info, controllerRoutes, status: info.status });
    }
}
const APIDocPath = (0, path_1.resolve)(__dirname, '..', '..', 'cdn', 'APIDoc.json');
const APIDoc = JSON.stringify(API);
(0, promises_1.writeFile)(APIDocPath, APIDoc);
exports.default = API;
