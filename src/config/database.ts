import sqlite from "sqlite3";

export const database = new sqlite.Database(":memory:");

