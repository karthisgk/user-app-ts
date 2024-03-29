import BaseController from "./base.controller";
import express, { Request, Response } from "express"
import User from "../models/user"
import UserService from "../service/user.service";

export default class UserController implements BaseController {
    public basePath: string
    public router: express.Router;
    public service: UserService
    constructor(apiBase: string){
        this.service = new UserService()
        this.basePath = apiBase
        this.router = express.Router()
        this.basePath = `${apiBase}/users/`
        this.initRoutes()
    }

    initRoutes(){
        this.router.get(`${this.basePath}check`, this.check.bind(this))

        this.router.get(`${this.basePath}`, this.getAllUser.bind(this))
        this.router.get(`${this.basePath}:_id`, this.getUser.bind(this))
        this.router.post(`${this.basePath}`, this.createUser.bind(this))
        this.router.put(`${this.basePath}:_id`, this.updateUser.bind(this))
        this.router.delete(`${this.basePath}:_id`, this.deleteUser.bind(this))
    }

    check(req: Request, res: Response){
        res.json({
            success: true
        })
    }

    async getAllUser(req: Request, res: Response) {
        const skip = parseInt((req.query.page as string) || "1") - 1
        try {
            const result = await this.service.getUser([
                {
                    $skip: skip * 10
                },
                {
                    $limit: 10
                }
            ])
            res.json({
                data: result
            })
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }

    getUser(req: Request, res: Response) {
        const _id = req.params
        if (!_id) return res.status(400).json({ message: 'id is required' });
        User.findById(_id).then(user => {
            if (!user) {
                res.status(400).json({ message: `user not found!` });
                return
            }
            res.json({
                data: user
            })
        }).catch(err => {
            res.status(400).json({ message: err.message });
        })
    }

    async createUser(req: Request, res: Response){
        console.log(req.body)

        const { name, age, address } = req.body;
        if (!name || !age || !address) return res.status(400).json({ message: 'pass all mandatory fields' });

        try {
            const user = await User.create({
                name,
                age,
                address
            })

            res.status(201).json({ message: `New user created!` });
        } catch(err) {
            res.status(400).json({ message: err.message });
        }
    }

    async updateUser(req: Request, res: Response){

        const { name, age, address } = req.body;
        const _id = req.params
        if (!_id || !name || !age || !address) return res.status(400).json({ message: 'pass all mandatory fields' });

        try {
            const result = await User.updateOne({
                _id
            },{
                name,
                age,
                address
            })

            if (!result.matchedCount) {
                res.status(204).json({ message: `user not found!` });
                return
            }

            res.json({ message: `user updated!` });
        } catch(err) {
            res.status(400).json({ message: err.message });
        }
    }

    async deleteUser(req: Request, res: Response){
        const _id = req.params
        if (!_id) return res.status(400).json({ message: 'id is required' });

        try {
            const result = await User.deleteOne({
                _id
            })

            if (!result.deletedCount) {
                res.status(204).json({ message: `user not found!` });
                return
            }

            res.json({ message: `user deleted!` });
        } catch(err) {
            res.status(400).json({ message: err.message });
        }
    }
}