import Quote from '../models/Quote.js';

export const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await Quote.findById(id);

    if (!quote) {
      return res.status(404).json({ message: "Quote not found" });
    } else {
      return res.status(200).json(quote);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

export const createQuote = async (req, res) => {
  const quote = new Quote(req.body);
  await quote.save();
  res.status(201).json(quote);
}

export const updateQuote = async (req, res) => {
  const { id } = req.params;
  const quote = await Quote.findByIdAndUpdate(id, req.body)
  res.status(200).json(quote);
}

export const deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Quote.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Quote deleted");
    }

    throw new Error("Quote not found");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}