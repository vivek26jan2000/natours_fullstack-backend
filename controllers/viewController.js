const AppError = require('../utils/appError');
const Tour = require('./../models/tourModel');
const catchAsync = require('./../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();
  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ name: req.params.name }).populate({
    path: 'reviews',
    select: 'name photo review'
  });
  if (!tour) {
    return next(new AppError('Their Is No Tour With This Name', 404));
  }
  res.status(200).render('tour', {
    title: tour.name,
    tour
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Login Into Your Account'
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your Account'
  });
};
