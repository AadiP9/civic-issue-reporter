const Report = require('../models/report');
const User = require('../models/User');

// @desc    Get all reports
// @route   GET /api/reports
// @access  Public
const getReports = async (req, res) => {
  const reports = await Report.find({}).populate('user', 'name');
  res.json(reports);
};

// @desc    Get single report
// @route   GET /api/reports/:id
// @access  Public
const getReportById = async (req, res) => {
  const report = await Report.findById(req.params.id).populate('user', 'name');

  if (report) {
    res.json(report);
  } else {
    res.status(404);
    throw new Error('Report not found');
  }
};

// @desc    Create a new report
// @route   POST /api/reports
// @access  Private
const createReport = async (req, res) => {
  const { title, description, location, image } = req.body;

  const report = new Report({
    title,
    description,
    location,
    image,
    user: req.user._id,
  });

  const createdReport = await report.save();

  // Award points to the user for submitting a report
  const user = await User.findById(req.user._id);
  user.points += 10; // Award 10 points for each report
  await user.save();

  res.status(201).json(createdReport);
};

// @desc    Update a report
// @route   PUT /api/reports/:id
// @access  Private
const updateReport = async (req, res) => {
  const { status } = req.body;

  const report = await Report.findById(req.params.id);

  if (report) {
    report.status = status;
    const updatedReport = await report.save();
    res.json(updatedReport);
  } else {
    res.status(404);
    throw new Error('Report not found');
  }
};

module.exports = {
  getReports,
  getReportById,
  createReport,
  updateReport,
};