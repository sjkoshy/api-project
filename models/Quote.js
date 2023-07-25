const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  quote: String,
  author: String,
  season: String,
  episode: String
})

export default mongoose.model("Quote", QuoteSchema);
