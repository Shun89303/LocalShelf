import image1 from '../assets/images/item1.jpg';
import image2 from '../assets/images/item10.jpg';

function Profile() {
    return (
        <div>
            <h1>Profile page</h1>
            <p>Username: </p>
            <p>Phone: </p>
            <button>Upload Product</button>
            <input type="file" />
            <h2>Uploaded Products</h2>
            <img src={image1} alt="uploade_image" />
            <img src={image2} alt="uploade_image" />
        </div>
    )
}

export default Profile;