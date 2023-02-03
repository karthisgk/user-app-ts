import mongoose, { PipelineStage } from "mongoose"
import User, {IUser} from "../models/user"

export default class UserService {
    constructor() {

    }

    getUser(aggregate: PipelineStage[]): Promise<IUser[]>{
        return new Promise((resolve,reject) => {
            User.aggregate(aggregate).then(result => {
                resolve(result)
            }).catch(err => reject(err))
        })
    }
}