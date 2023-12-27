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
const group = process.argv[2]; // node consumer.js <group>
(() => __awaiter(void 0, void 0, void 0, function* () {
    const consumer = client_1.kafka.consumer({ groupId: group });
    console.log('connecting to consumer...');
    yield consumer.connect();
    console.log('connected to consumer');
    yield consumer.subscribe({ topics: ["user-type"], fromBeginning: true });
    yield consumer.run({
        eachMessage: ({ topic, partition, message, heartbeat, pause }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(`${group}: [${topic}]: PART:${partition}:`, message === null || message === void 0 ? void 0 : message.value.toString());
        }),
    });
}))();
