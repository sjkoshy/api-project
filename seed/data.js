import db from '../db/connection.js';
import Quote from '../models/Quote.js';
import quotes from './quotesData.json" assert { type: "json" }';

const insertData = async () => {
  try {
    await db.dropDatabase();
    await Quote.insertMany(quotes);
    console.log('Success!');
    db.close();
  } catch (error) {
    console.log(error);
    db.close();
  }
}

insertData();