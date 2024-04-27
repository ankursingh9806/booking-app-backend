const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/booking-page", userController.bookingPage);
router.get("/user-fetch", userController.fetchAppointment);
router.post("/user-add", userController.addAppointment);
router.delete("/user-delete/:userId", userController.deleteAppointment);
router.put("/user-update/:userId", userController.updateAppointment);

module.exports = router;