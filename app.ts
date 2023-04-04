import express, { Request, Response, NextFunction } from "express"
import mongoose from "mongoose"
import { AppConfig } from "./lib/config"
import cors from "cors"
import getCorsOption from "./lib/middlewares/corsOption"
import getAccessControlCredentials from "./lib/middlewares/credentials"
import path from "path"
import cookieParser from "cookie-parser"
import createError from "http-errors"
import BaseController from "./lib/controllers/base.controller"
import dotenv from "dotenv"
import TelegramService from "./lib/service/telegram.service"
dotenv.config()

export default class App {
    public app: express.Application
    public config: AppConfig
    public controllers: BaseController[]
    constructor(config: AppConfig, controllers: BaseController[]) {
        this.app = express()
        this.config = config
        this.controllers = controllers
        this.connectDb()
        this.initMiddleWares()
        this.initRoutes()
        if (config.name == "local") {
            this.initLocalApp()
        }
        new TelegramService("1250452599:AAFq8t4GGmuB-0KIaA3okbB_FhJ2XsSkuuQ").start()
    }

    async connectDb(){
        try {
            mongoose.set("strictQuery", !false)
            await mongoose.connect(process.env.MONGO_DB_URL, {
                dbName: this.config.dataBaseName
            });
        } catch (err) {
            console.error(err, "database error");
        }
    }

    initControllers(){
        this.controllers.forEach(controller => {
            this.app.use("/", controller.router)
        })
    }

    initMiddleWares() {
        this.app.use(getAccessControlCredentials(this.config.allowedOrigins))
        this.app.use(cors(getCorsOption(this.config.allowedOrigins)))
        this.app.options('*', cors());
        this.app.set('views', path.join(__dirname, '..', 'views'));
        this.app.set('view engine', 'ejs');
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, '..', 'public')));
    }

    initRoutes() {
        this.app.get(this.config.apiBase, (req: Request, res: Response) => {
            res.status(200).send("Hi bye Env: " + process.env.name)
        })

        this.initControllers()

        this.app.use(function (req: Request, res: Response, next: NextFunction) {
            next(createError(404));
        });

        this.app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render('error');
        });
    }


    initLocalApp() {
        this.app.listen(this.config.port, () => {
            console.log(`server is listening at ${this.config.port}`)
        })
    }
}