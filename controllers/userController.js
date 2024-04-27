const User = require("../models/userModel");
const path = require("path");

const bookingPage = async (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, "..", "public", "html", "index.html"));
    } catch (err) {
        console.error("error getting booking page:", err);
        res.status(500).json({ error: "internal server error" });
    }
}

const fetchAppointment = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ users, message: "users fetched" });
    } catch (err) {
        console.error("error fetching users:", err);
        res.status(500).json({ error: "internal server error" });
    }
}

const addAppointment = async (req, res, next) => {
    try {
        const { name, email, phone } = req.body;
        const newUser = await User.create({
            name: name,
            email: email,
            phone: phone
        })
        res.status(201).json({ newUser, message: "user added" });
    } catch (err) {
        console.error("error adding user:", err);
        res.status(500).json({ error: "internal server error" });
    }
}

const deleteAppointment = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);
        await user.destroy();
        res.status(200).json({ message: "user deleted" });
    } catch (err) {
        console.error("error deleting user:", err);
        res.status(500).json({ error: "internal server error" });
    }
}

const updateAppointment = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const { name, email, phone } = req.body;
        const updatedUser = {
            name: name,
            email: email,
            phone: phone
        };
        await User.update(updatedUser, { where: { id: userId } });
        res.status(200).json({ message: "user updated" });
    } catch (err) {
        console.error("error updating user:", err);
        res.status(500).json({ error: "internal server error" });
    }
};

module.exports = {
    bookingPage,
    fetchAppointment,
    addAppointment,
    deleteAppointment,
    updateAppointment
};