"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSuccess = exports.ResponseError = void 0;
class ResponseError {
    constructor(error) {
        this.success = false;
        this.error = error;
    }
}
exports.ResponseError = ResponseError;
class ResponseSuccess {
    constructor(data) {
        this.success = true;
        this.data = data;
    }
}
exports.ResponseSuccess = ResponseSuccess;
//# sourceMappingURL=ResponseTranslator.js.map