import useProfile from "../contexts/profile/useProfile.js";

export function HandleUpload() {
    const { name, setName, price, setPrice, images, setImages, setError, toggleUploadForm, setUploads } = useProfile();

    const UploadProduct = async () => {
        setError(null);
        const formData = new FormData();

        if (!name) {
            setError("Product name is required");
            return;
        }
        
        formData.append('name', name);

        if (images) {
            formData.append('image', images[0]);
        }

        if (price) {
            formData.append('price', price);
        }

        try {
            const res = await fetch('/api/products', {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: formData
            })
    
            if (!res.ok) {
                const err = await res.json();
                setError(err);
            }
    
            const data = await res.json();
            setUploads(prev => [
                ...prev,
                data.product
            ]);
            setName('');
            setPrice('');
            setImages([]);
            toggleUploadForm();
        } catch (error) {
            setError(error);
        }
    }

    return UploadProduct;
}