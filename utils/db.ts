import mongoose, { Connection } from "mongoose";

interface ConnectionType {
  isConnected?: number;
}

const connection: ConnectionType = {};

async function connect(): Promise<void> {
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return;
    }
    await mongoose.disconnect();
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI || '');
    console.log("new connection");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("Could not connect to database", error);
    throw new Error("Database connection failed");
  }
}

async function disconnect(): Promise<void> {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      try {
        await mongoose.disconnect();
        connection.isConnected = 0;
      } catch (error) {
        console.error("Could not disconnect from database", error);
        throw new Error("Database disconnection failed");
      }
    } else {
      console.log("not disconnected");
    }
  }
}

function convertDocToObj(doc: any): any {
  if (doc == null) {
    return null;
  } else {
    doc._id = doc._id.toString();
    doc.createdAt = doc.createdAt.toString();
    doc.updatedAt = doc.updatedAt.toString();
    return doc;
  }
}

const db = { connect, disconnect, convertDocToObj };
export default db;
