"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IDate_1 = require("../../types/IDate");
const constants_1 = require("../../configs/constants");
const TimestampsPlugin = (scm) => {
    scm.path('status', {
        type: Number,
        default: constants_1.ACTIVE,
    });
    scm.path('createdAt', {
        type: IDate_1.DateSchema,
        default: () => new Date(),
        set: (d) => {
            return {
                timeString: d.toLocaleTimeString(),
                dateString: d.toLocaleDateString(),
                time: d.getTime(),
                date: d,
            };
        },
    });
    scm.path('updatedAt', {
        type: IDate_1.DateSchema,
        set: (d) => {
            if (d instanceof Date) {
                return {
                    timeString: d.toLocaleTimeString(),
                    dateString: d.toLocaleDateString(),
                    time: d.getTime(),
                    date: d,
                };
            }
            return d;
        },
    });
    scm.pre(['findOneAndUpdate', 'update'], function (next) {
        const d = new Date();
        this.set({
            updatedAt: {
                timeString: d.toLocaleTimeString(),
                dateString: d.toLocaleDateString(),
                time: d.getTime(),
                date: d,
            },
        });
        next();
    });
    return scm;
};
exports.default = TimestampsPlugin;
