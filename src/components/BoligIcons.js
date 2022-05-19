import { IoImageOutline, IoLayersOutline, IoHeartOutline, IoLocationOutline } from 'react-icons/io5'

const BoligIcons = ({clickimage}) => {
    return ( 
        <div className="flex flex-1 gap-12 justify-center text-4xl text-textgrey">
            <IoImageOutline onClick={clickimage} />
            <IoLayersOutline />
            <IoLocationOutline />
            <IoHeartOutline />
        </div>
     );
}
 
export default BoligIcons;