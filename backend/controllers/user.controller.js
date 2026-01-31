import { userModel } from "../models/index.js";
import { validateUsername, validateMyanmarPhone, validatePassword } from '../utils/validators.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export async function register(req, res, next) {
    const { username, phone, password } = req.body;
    const isUsername = validateUsername(username);
    const isPhone = validateMyanmarPhone(phone);
    const isPassword = validatePassword(password);

    if (!isUsername) {
        return res.status(400).json({ error: "Invalid username/phone/password too short" });
    }

    if (!isPhone) {
        return res.status(400).json({ error: "Invalid username/phone/password too short"});
    }

    if (!isPassword) {
        return res.status(400).json({ error: "Invalid username/phone/password too short"});
    }

    const user = await userModel.findUser({phone});
    if (user) {
        return res.status(409).json({ error: "User already exist"})
    }

    const hashedPass = await bcrypt.hash(password, 10);

    try {
        const result = await userModel.createUser({
            username, 
            phone,
            password: hashedPass
        })
        const token = jwt.sign(
            { userId: result.insertedId.toString() },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        )
        return res.status(201).json({ message: "Successful Register", token })
    } catch (error) {
        next(error)
    }
}

export async function login(req, res, next) {
    const { username, phone, password } = req.body;
    const isUsername = validateUsername(username);
    const isPhone = validateMyanmarPhone(phone);
    const isPassword = validatePassword(password);

    if (!isUsername) {
        return res.status(400).json({ error: "Invalid credentials" });
    }

    if (!isPhone) {
        return res.status(400).json({ error: "Invalid credentials"});
    }

    if (!isPassword) {
        return res.status(400).json({ error: "Invalid credentials"});
    }

    try {
        const user = await userModel.findUser({ phone });
        if (!user) {
            return res.status(400).json({ error: "User does not exist"});
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
    
        const token = jwt.sign(
            { userId: user._id.toString() },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        )
    
        return res.status(200).json({ message: "Successful Login", token });
    } catch (error) {
        next(error);
    }
}

export async function getInfo(req, res, next) {
    const userId = req.user.id;
    try {
        const data = await userModel.getUserInfo(userId);
        if (!data) {
            return res.status(400).json({ error: "User not found" });
        }
        return res.status(200).json({ message: "User found", username: data.username, phone: data.phone });
    } catch (error) {
        next(error);
    }
}

export async function upload(req, res, next) {
    const { name, price } = req.body;

    const userInfo = await userModel.getUserInfo(req.user.id);

    if (!name) return res.status(400).json({ error: "Product name is required"});

    const imagePaths = req.files ? req.files.map((file) => `uploads/products/${file.filename}`) : [];

    try {
        const product = {
            owner: req.user.id,
            name,
            price: price || null,
            phone: userInfo.phone,
            images: imagePaths
        }

        const result = await userModel.uploadImage(product);

        res.status(201).json({ product: {
            ...product,
            _id: result.insertedId
        }, message: "Upload image succeeded"});
    } catch (error) {
        next(error);
    }
}

export async function getProfileImages(req, res, next) {
    try {
        const images = await userModel.getUserImages({ owner: req.user.id });
        if (!images || images.length === 0) {
            return res.status(404).json({ error: "No Images Found"});
        }
        return res.status(200).json({ images, message: "Found User's product images"});
    } catch (error) {
        next(error)
    }
}

export async function getAllImages(req, res, next) {
    try {
        const images = await userModel.getImages();
        if (!images || images.length === 0) {
            return res.status(500).json({ error: "No images found" });
        }
        return res.status(200).json({ images, message: "Successful image fetch" });
    } catch (error) {
        next(error)
    }
}