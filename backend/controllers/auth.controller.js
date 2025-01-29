import { User } from "../models/user.model.js";

export async function signup(req, res) {
    //console.log("SignUp Required");
    try {

        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex) {
            return res.status(400).json({ success: false, message: "Invalid Email" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 Character" });
        }

        if (!username) {
            return res.status(400).json({ success: false, message: " The username is important" });
        }

        const existingUserByEmail = await User.findOne({ email: email });

        if (existingUserByEmail) {
            return res.status(400).json({ success: false, message: "Email already exist" });
        }

        const existingUsername = await User.findOne({ username: username });

        if (existingUsername) {
            return res.status(400).json({ success: false, message: "Username already exist" })
        }

        const PROFILE_PICS = []
        const newUser = new User({
            email: email,
            password: password,
            username: username
        })

    } catch (error) {
        return res.status(400).json({ success: false, message: "Technical Issue" });
    }
}

export async function login(req, res) {
    console.log("Login Page Required")
}

export async function logout(req, res) {
    console.log("Logout page");
}