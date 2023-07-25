import db from '../db/connection.js';
import Quote from '../models/Quote.js';
import quotes from '../db/quotesData.json' assert { type: "json"}

const insertData = async () => {
  try {
    await db.dropDatabase();

    const scrubbedData = quotes.map((quote) => {
      return {
        quote: quote.quote,
        author: quote.author,
        season: quote.season,
        episode: quote.episode
      }
    })

    await Quote.insertMany(scrubbedData);
    console.log('Success!');
    db.close();
  } catch (error) {
    console.log(error);
    db.close();
  }
}

insertData();