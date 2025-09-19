const express = require('express');
const router = express.Router();
const {
  getReports,
  getReportById,
  createReport,
  updateReport,
} = require('../controllers/reportsController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getReports).post(protect, createReport);
router.route('/:id').get(getReportById).put(protect, updateReport);

module.exports = router;