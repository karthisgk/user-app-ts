import App from "./app"
import { ConfigManager } from "./lib/config"
import UserController from "./lib/controllers/user.controller"

const configManager = new ConfigManager()
const { app } = new App(configManager.config, [
    new UserController(configManager.config.apiBase)
])

export default app