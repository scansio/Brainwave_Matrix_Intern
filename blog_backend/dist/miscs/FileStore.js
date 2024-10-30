"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const md5_1 = require("../libs/md5");
const fs_1 = __importDefault(require("fs"));
class FileStore {
    isPublic;
    storage;
    upload;
    controller;
    publicDir = `../../cdn/file_store/public`;
    privateDir = `../../file_store/private/user`;
    activeDir;
    constructor(controller, isPublic = false, user) {
        this.isPublic = isPublic;
        this.controller = controller;
        this.privateDir = path_1.default.resolve(`${__dirname}/${this.privateDir}/${user ? user : this.controller.user._id}`);
        this.publicDir = path_1.default.resolve(`${__dirname}/${this.publicDir}`);
        fs_1.default.mkdirSync(this.privateDir, { recursive: true });
        this.activeDir = this.isPublic ? this.publicDir : this.privateDir;
        this.storage = multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                cb(null, this.activeDir);
            },
            filename: (req, file, cb) => {
                cb(null, `${(0, md5_1.rand)(12345, 678910)}.${file.mimetype.split('/')[1]}`);
            },
        });
        this.upload = (0, multer_1.default)({
            storage: this.storage,
            fileFilter: (req, file, cb) => {
                const allowedFileTypes = ['image/jpeg', 'image/png'];
                if (allowedFileTypes.includes(file.mimetype)) {
                    cb(null, true);
                }
                else {
                    cb(new Error('Invalid file type. (jpeg or png only)'));
                }
            },
        });
    }
    uploadFor(filename) {
        return new Promise((resolve, reject) => {
            this.upload.single(filename)(this.controller.req, this.controller.res, (error) => {
                if (error) {
                    return reject(error);
                }
                const file = this.controller.req.file;
                if (!file) {
                    return reject(false);
                }
                else {
                    return resolve(file.filename);
                }
            });
        });
    }
    uploadForMultiple(filename, maxCount = 10) {
        return new Promise((resolve, reject) => {
            this.upload.array(filename, maxCount)(
            // Use array for multiple files
            this.controller.req, this.controller.res, (error) => {
                if (error) {
                    return reject(error);
                }
                const files = this.controller.req.files;
                if (!files || files.length === 0) {
                    return reject(false);
                }
                else {
                    const filenames = files.map((file) => file.filename);
                    return resolve(filenames);
                }
            });
        });
    }
    delete(filename) {
        const f = `${this.activeDir}/${filename}`;
        try {
            fs_1.default.rmSync(f);
        }
        catch (error) {
            /* empty */
        }
    }
}
exports.default = FileStore;
