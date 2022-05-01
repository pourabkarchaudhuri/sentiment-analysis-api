const sentimentHandler = require("sentiment");
var sentiment = new sentimentHandler();

exports.sentimentAnalysisHandler = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      analysis: sentiment.analyze(req.query.input),
    },
  });
};
