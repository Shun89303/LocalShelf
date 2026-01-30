function formatMyanmarLocal(phone) {
    if (!phone) return "";
    return phone.replace("+95", "0");
}

export default formatMyanmarLocal;