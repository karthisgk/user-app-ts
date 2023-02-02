import express from "express"

export default interface BaseController {
    basePath: string;
    router: express.Router;
}