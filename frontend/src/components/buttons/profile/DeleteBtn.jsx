import style from '../../../assets/styles/image/Image.module.css';
import useProfile from '../../../contexts/profile/useProfile.js';

function DeleteBtn(props) {

    const { setUploads } = useProfile();

    const handleDelete = async () => {
        let fetchURL = `/api/products/${props.id}`;

        if (props.path) {
            fetchURL = `/api/products/${props.id}?imgPath=${encodeURIComponent(props.path)}`;
        }
            const res = await fetch(fetchURL, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            if (!res.ok) {
                const result = await res.json();
                console.error(result.error);
                window.alert(result.error);
                return;
            }

            const result = await res.json(); 
            console.log(result.message);
            window.alert(result.message);

            setUploads(prev => prev.filter(upload => upload._id !== props.id));
    }

    return (
        <button 
            className={style.btn}
            onClick={handleDelete}
        >
            X
        </button>
    )
}

export default DeleteBtn;