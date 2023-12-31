"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testNpm = void 0;
class testNpm {
    constructor() {
        this.generate = (length = 3) => {
            let result = "";
            for (let i = 0; i <= length; i++) {
                result += i;
            }
            return result;
        };
    }
}
exports.testNpm = testNpm;
