import style from '../../../assets/styles/image/Image.module.css';
import useProfile from '../../../contexts/profile/useProfile.js';
import { deleteProduct } from '../../../api/ProfileApi.js';

function DeleteBtn(props) {

    const { setUploads } = useProfile();

    const handleDelete = async () => {
            try {
                const result = await deleteProduct({
                    id: props.id,
                    path: props.path
                });
                console.log(result.message);
                window.alert(result.message);
                setUploads(prev => prev.filter(upload => upload._id !== props.id));
            } catch (error) {
                console.error(error);
                window.alert(error.message);
                return;
            }
    }

    return (
        <button 
            className={style.btn}
            onClick={handleDelete}
        >
            ✖
        </button>
    )
}

export default DeleteBtn;