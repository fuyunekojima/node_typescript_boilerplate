"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./libs/User"));
const main = () => {
    let u = new User_1.default("Suzuki");
    u.SayHello();
};
(() => {
    main();
})();
//# sourceMappingURL=index.js.map