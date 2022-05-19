import { IoIosHeartEmpty } from "react-icons/io";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Heart = ({id}) => {
    const { handleFavorites, token } = useContext(UserContext);
    const handleClick = () => {
        handleFavorites(id)
    }

    return ( 
        <button onClick={handleClick} className={`absolute bg-white p-2 rounded-full ${token ? "block" : "hidden"}`}>
            <IoIosHeartEmpty />
        </button>
     );
}
 
export default Heart;