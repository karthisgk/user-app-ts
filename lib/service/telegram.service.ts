import TelegramBot from "node-telegram-bot-api";
import moment from "moment"
import { execFile } from "child_process"
import path from "path";
import fs from "fs";

enum TreatTypes {
    BIRTHDAY = "Birthday",
    MARRIAGE = "Marriage"
}

interface Treat {
    type: TreatTypes,
    name: string,
    date: Date
}

const treatList: Treat[] = [
    // {
    //     type: TreatTypes.BIRTHDAY,
    //     name: "Deepak",
    //     date: new Date(2023,2,5)
    // },
    // {
    //     type: TreatTypes.BIRTHDAY,
    //     name: "Suriya PD",
    //     date: new Date(2023,3,17)
    // },
    // {
    //     type: TreatTypes.BIRTHDAY,
    //     name: "Karthick SG",
    //     date: new Date(2023,3,19)
    // },
    // {
    //     type: TreatTypes.BIRTHDAY,
    //     name: "Srini",
    //     date: new Date(2023,3,30)
    // }
]

export default class TelegramService {
    private _token: string;
    public get token(): string {
        return this._token;
    }
    public set token(value: string) {
        this._token = value;
    }
    constructor(token: string) {
        this.token = token
    }

    getTreatListMessage(): string {
        return treatList.map(t => `${moment(t.date).format("Do MMMM YYYY")} - ${t.name} ${t.type}`).join("\n")
    }

    start() {
        const bot = new TelegramBot(this.token, { polling: true })
        console.log("telegram bot listening commands")
        var cid = 0
        bot.onText(/\/treat_list/, (msg, match) => {
            cid = 0
            const chatId = msg.chat.id;
            const resp = this.getTreatListMessage()
            bot.sendMessage(chatId, resp);
        });

        bot.onText(/^kadavusol_/, (msg, match) => {
            if (cid != 0) {
                const pass = match.input.replace(/^kadavusol_/, "")
                if (pass === "avuram_ami") {
                    execFile('node', ['/Users/karthicksg/Documents/DDL/Vidyaan-Server/migrations/1678448077311-import-db.js'], (error, stdout, stderr) => {
                        if (error) {
                            throw error;
                        }
                        console.log(stdout);
                        bot.sendMessage(msg.chat.id, "sucesss", {reply_to_message_id: msg.message_id})
                    });
                    bot.sendMessage(msg.chat.id, "starting...")
                } else {
                    bot.sendMessage(msg.chat.id, "kadavusol thappu, feri try ker")
                }
            }
            cid = 0
        })

        bot.onText(/\/ddl_server_import/, (msg, match) => {
            const chatId = msg.chat.id;
            cid = chatId
            bot.sendMessage(chatId, "Kadavusol thaduvo", { reply_to_message_id: msg.message_id });
        });

        bot.onText(/\/locate_me/, (msg, match) => {
            cid = 0
            const chatId = msg.chat.id;
            bot.sendLocation(chatId, 9.916642, 78.129285);
        });

        bot.onText(/\/gmail_password/, (msg, match) => {
            cid = 0
            const chatId = msg.chat.id;
            // let file = fs.createReadStream(path.join(__dirname, '../../..', 'public', "weekend-ending-middle-finger.gif"))
            bot.sendAnimation(chatId, "https://media.tenor.com/zICNXV6WIXgAAAAC/weekend-ending-middle-finger.gif");
        });
    }
}