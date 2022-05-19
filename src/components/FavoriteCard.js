/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const FavoriteCard = ({id, img, alttext, road, city, type, label, rooms, price, post, udgift, størrelse}) => {
    
    const style = css`
        box-shadow: 0px 10px 30px 0px #0073E10F;
    `

    const { handleFavorites } = useContext(UserContext);
    const handleClick = () => {
        handleFavorites(id)
    }

    return ( 
        <div css={style} className="bg-white grid grid-rows-2 grid-cols-4 p-8 border-2 border-border">
            <div className="row-span-2">
                <img src={img} alt={alttext} />
            </div>   

            <div className="p-2 row-span-2">
                <h4 className="font-bold text-xl pb-4">{road}</h4>
                <p>{post} {city}</p>
                <p className="pb-4 pt-4"><span className="font-bold">{type}</span>  • Ejerudgift {udgift} kr.</p>
            </div>

            <div className="py-2 flex flex-1 gap-7 flex-row col-span-2">
                <div className="bg-bluetext text-white px-2 mb-12">
                    <p className="text-lg">{label}</p>
                </div>
                <p>{rooms} Værelser • {størrelse} m²</p>
                <p className="font-bold ml-auto">Kr.  {price}</p>
            </div>

            <button onClick={handleClick} className="bg-bluetext text-white row-start-2 col-start-4 m-5">Fjern fra favoritter</button>
        </div>
     );
}
 
export default FavoriteCard;