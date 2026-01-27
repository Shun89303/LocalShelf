export async function fetchAllImages() {
    const res = await fetch('/api/products/all');
    if (!res.ok) {
        const err = await res.json();
        console.error(err);
        return null;
    }
    const data = await res.json();
    return data.images;
}