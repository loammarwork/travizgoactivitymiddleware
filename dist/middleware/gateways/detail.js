"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateDetailGateway = void 0;
const z = __importStar(require("zod"));
const zod_1 = require("zod");
const axios_1 = require("axios");
const ResponseTranslator_1 = require("../helper/ResponseTranslator");
const DetailGatewayRequest = z.object({
    params: z.any({}),
    headers: z.any({}),
    body: z.object({
        activityId: z.string(),
        from: z.string(),
        to: z.string(),
        language: z.string(),
    }),
    query: z.any({}),
});
function ValidateDetailGateway(req, res, next) {
    try {
        req = DetailGatewayRequest.parse(req);
        next();
    }
    catch (error) {
        if (error instanceof Error)
            return res
                .status(axios_1.HttpStatusCode.BadRequest)
                .json(new ResponseTranslator_1.ResponseError({ code: axios_1.HttpStatusCode.BadRequest, message: error.message }));
        if (error instanceof zod_1.ZodError)
            return res
                .status(axios_1.HttpStatusCode.BadRequest)
                .json(new ResponseTranslator_1.ResponseError({ code: axios_1.HttpStatusCode.BadRequest, message: error.message }));
        return res.status(axios_1.HttpStatusCode.BadRequest).json(new ResponseTranslator_1.ResponseError({ code: axios_1.HttpStatusCode.BadRequest, message: "Unknown error" }));
    }
}
exports.ValidateDetailGateway = ValidateDetailGateway;
//# sourceMappingURL=detail.js.map