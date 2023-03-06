import { Request } from "express";

declare module "express-serve-static-core" {
    interface Request {
        headers: any;
        body: any;
        query: any;
        params: any;
    }
}
