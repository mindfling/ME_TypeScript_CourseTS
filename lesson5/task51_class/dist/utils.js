"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomID = void 0;
const getRandomID = () => `id${Math.random().toString(32).substring(2, 10)}_${Date.now().toString(16)}`;
exports.getRandomID = getRandomID;
