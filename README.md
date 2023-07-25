# Seinfeld Quotes API

It's an API about nothing! Just kidding... 

I built an RESTful API with CRUD functionality using data from https://github.com/wdifruscio/seinfeld-api/blob/master/seinfeld.js. You could use this API to create a trivia game, a random quote generator, or a wiki. 

The API is hosted at 

Each **object** contains the following:
- Quote
- Author of quote
- Season
- Episode

**Technologies used:**
- Node.js
- Express
- Mongoose
- MongoDB

## Routes

- The landing page is located at `/api`. 
- Quotes data can be found at `/api/quotes`.

## Installation

1. Clone down this repository. 
2. Run `npm install`.
3. Run `npm start`.

## Sample Response

```
{
    _id: ObjectId("64bff0a9fc85b5124e87494d"),
    quote: 'These pretzels are making me thirsty.',
    author: 'Kramer',
    season: '3',
    episode: '11',
    __v: 0
  }
```

---

Hopefully using this API won't make you feel like this...

![Elaine Benes slamming the keyboard in frustration](https://i.gifer.com/VJb.gif)

...but if it does, please submit a pull request to send me feedback or code suggestions. Thanks! 

