import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function practice() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`♛ DB connected successfully`);
        app.listen(config.port, () => {
            console.log(`Application app listening on port ${config.port}`)
        })
    } catch (error) {
        console.log(`Failed to connect!`, error)
    }
}
practice();