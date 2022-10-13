const TourPackage = require("../model/tourPackage");

const tourPackageController = {
  //add tour-package
  addTourPackage: async (req, res) => {
    try {
      const newTourPackage = new TourPackage({
        name: req.body.name,
        thumbnail: req.files.thumbnail,
        time: req.body.time,
        vehicle: req.body.vehicle,
        departure_place: req.body.departure_place,
        destination: req.body.destination,
        schedule: req.body.schedule,
        policy: req.body.policy,
        question: req.body.question,
      });
      const saveTourPackage = await newTourPackage.save();
      res.status(200).json(saveTourPackage);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get all tour-package
  getAllTourPackage: async (req, res) => {
    try {
      const tourPackages = await TourPackage.find();
      res.status(200).json(tourPackages);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //update a tour-pakckage by id
  updateTourPackage: async (req, res) => {
    try {
      const updateTourPackage = {
        name: req.body.name,
        thumbnail: req.files.thumbnail,
        time: req.body.time,
        vehicle: req.body.vehicle,
        departure_place: req.body.departure_place,
        destination: req.body.destination,
        schedule: req.body.schedule,
        policy: req.body.policy,
        question: req.body.question,
      };
      const result = await TourPackage.findOneAndUpdate(
        { _id: req.params.id },
        updateTourPackage
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = tourPackageController;
