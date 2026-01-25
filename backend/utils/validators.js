import { parsePhoneNumber } from 'libphonenumber-js';

export const validateUsername = (username) => {
    if (typeof username !== "string") return false;
    if (username.length < 3 || username.length > 30) return false;
    if (!/^[a-zA-Z0-9_ ]+$/.test(username)) return false;
    return true;
}

export const validateMyanmarPhone = (phone) => {
    try {
        const number = parsePhoneNumber(phone, "MM");
        return number.isValid();
    } catch (error) {
        return false;
    }
}

export const validatePassword = (password) => {
    if (typeof password !== "string") return false;
    if (password.length < 8) return false;
    return true;
}