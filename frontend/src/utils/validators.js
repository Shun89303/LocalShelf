export const usernameCleaner = (user) => {
    const cleanUsername = user.trim();
    if (!cleanUsername) {
        return null;
    }
    return cleanUsername;
}

export const phoneCleaner = (phone) => {
    const cleanPhone = phone.trim();
    if (!cleanPhone) {
        return null;
    }
    return cleanPhone;
}

export const passwordCleaner = (pass) => {
    const cleanPassword = pass.trim();
    if (!cleanPassword) {
        return null;
    }
    return cleanPassword;
}