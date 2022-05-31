import mysql from 'mysql2/promise';
import { config } from './config.js';
import "babel-polyfill";

export const connect = async () => {
    return await mysql.createConnection(config);

}
