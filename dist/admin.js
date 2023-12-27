"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const admin = client_1.kafka.admin();
    console.log('connecting to admin...');
    yield admin.connect();
    console.log('connected to admin');
    yield admin.createTopics({
        topics: [{
                topic: 'user-type',
                numPartitions: 2
            }]
    });
    yield admin.disconnect();
}))();
