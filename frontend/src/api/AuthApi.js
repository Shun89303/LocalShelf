export const fetchRegister = async (cleanUser, cleanPhone, cleanPass, setJWT) => {
    const res = await fetch('/api/auth/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: cleanUser,
            phone: cleanPhone,
            password: cleanPass
        })
    })
    if (!res.ok) {
        const err = await res.json(); 
        throw new Error(err.error);
    }

    const data = await res.json();
    console.log(data.message);
    localStorage.setItem("token", data.token);
    setJWT(data.token);
}

export const fetchLogin = async (cleanUser, cleanPhone, cleanPass, setJWT) => {
    const res = await fetch('/api/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: cleanUser,
            phone: cleanPhone,
            password: cleanPass
        })
    })

    if (!res.ok) {
        const err = await res.json(); 
        throw new Error(err.error);
    }

    const data = await res.json();
    console.log(data.message);
    localStorage.setItem("token", data.token);
    setJWT(data.token);
}

export const fetchInfo = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('/api/users/me', {
        method: "GET",
        body: token.userId
    })
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
    }

    const data = await res.json();
    return data;
}