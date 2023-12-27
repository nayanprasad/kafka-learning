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
    const producer = client_1.kafka.producer();
    console.log('connecting to producer...');
    yield producer.connect();
    console.log('connected to producer');
    yield producer.send({
        topic: "user-type",
        messages: [
            {
                key: "user",
                value: JSON.stringify({ user: "arun", type: "admin" })
            }
        ]
    });
}))();
