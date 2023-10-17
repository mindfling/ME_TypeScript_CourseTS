"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = exports.getRandomID = void 0;
const getRandomID = () => `id_${Math.random().toString(32).substring(2, 10)}_0x${Date.now().toString(16).substring(3, 11)}`;
exports.getRandomID = getRandomID;
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.getRandomInt = getRandomInt;
