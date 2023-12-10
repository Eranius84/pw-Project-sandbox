import * as dotenv from "dotenv";


export class UrlConfig {
    env: string
    url: string
    constructor(env: string) {
        this.env = env;
        this.url = this.selectEnv();
    }
    /**
     * @param env test,dev
    */
    selectEnv(): string {
        dotenv.config({ path: '.env' })
        const envv=this.env.toLowerCase()
        if (envv == 'test') {
            return process.env.TEST as string;
        } else {
            return process.env.DEV as string;
        }
    }
}
