import { CorsOptions } from "cors";

export default function getCorsOption(allowedOrigins: [string]): CorsOptions{
    return {
        origin: (origin: any, callback: any) => {
            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        optionsSuccessStatus: 200
    }
}