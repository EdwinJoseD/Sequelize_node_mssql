import dotenv from "dotenv";
import { Config } from "./config";
dotenv.config();


async function main(){
    const app = new Config();
    await app.Listen()
    await app.routes()
}

main();