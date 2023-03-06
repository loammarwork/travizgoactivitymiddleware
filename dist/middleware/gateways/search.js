"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateSearchGateway = void 0;
const z = require("zod");
const zod_1 = require("zod");
const axios_1 = require("axios");
const ResponseTranslator_1 = require("../helper/ResponseTranslator");
const SearchGatewayRequest = z.object({
    params: z.any({}),
    headers: z.any({}),
    body: z.object({
        keyword: z.string(),
        from: z.string(),
        to: z.string(),
        language: z.string(),
        pagination: z.object({
            itemsPerPage: z.number(),
            page: z.number(),
        }),
    }),
    query: z.any({}),
});
function ValidateSearchGateway(req, res, next) {
    try {
        req = SearchGatewayRequest.parse(req);
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
        return res
            .status(axios_1.HttpStatusCode.BadRequest)
            .json(new ResponseTranslator_1.ResponseError({ code: axios_1.HttpStatusCode.BadRequest, message: "Unknown error" }));
    }
}
exports.ValidateSearchGateway = ValidateSearchGateway;
//# sourceMappingURL=search.js.map