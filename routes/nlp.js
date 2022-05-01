const express = require("express");

const router = express.Router();
const { sentimentAnalysisHandler } = require("../controller/nlpController.js");
/**
 * GET API
 * @route GET /analysis
 * @group Analysis API
 * @param {string} input.query.required
 * @returns {object} 200 - Sentiment Analysis
 * @returns {Error}  default - Unexpected error
 */
router.get("/analysis", sentimentAnalysisHandler);

module.exports = router;
