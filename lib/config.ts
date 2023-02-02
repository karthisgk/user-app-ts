import config from "config";

export interface AppConfig {
    name: string;
    port: number;
    apiBase: string;
    databaseUrl: string;
    dataBaseName: string;
    allowedOrigins: [string]
}

export class ConfigManager  {
    
    private _config: AppConfig;
    public get config(): AppConfig {
        return this._config;
    }
    public set config(value: AppConfig) {
        this._config = value;
    }

    constructor(){
        this._config = config.get("environment")
    }
}
