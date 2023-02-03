import mongoose from "mongoose"
import User from "../models/user"

export default class UserService {
    constructor() {

    }

    getUser(aggregate: any[]): Promise<any>{
        return new Promise((resolve,reject) => {
            User.aggregate(aggregate).then(result => {
                resolve(result)
            }).catch(err => reject(err))
        })
    }
}