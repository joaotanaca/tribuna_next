import mongoose from "mongoose";

async function connection() {
    const MONGODB_URI = process.env.MONGODB_URI || "";
    let cached = (global as any).mongoose;

    if (!MONGODB_URI) {
        throw new Error(
            "Please define the MONGODB_URI environment variable inside .env.local",
        );
    }

    if (!cached) {
        cached = (global as any).mongoose = { conn: null, promise: null };
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        };

        cached.promise = await mongoose
            .connect(MONGODB_URI, opts)
            .then((mongoose) => mongoose);
    }
    
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connection;
