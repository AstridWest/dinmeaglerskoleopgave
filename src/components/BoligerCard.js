/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const BoligerCard = ({img, alttext, road, city, type, label, rooms, price, post, udgift, størrelse}) => {
    
    const style = css`
        box-shadow: 0px 10px 30px 0px #0073E10F;
    `
    
    return ( 
        <div css={style} className="bg-white rounded-sm">
                <img src={img} alt={alttext} className="rounded-t-sm" />
            <div className="p-4">
                <h4 className="font-bold text-xl pb-4">{road}</h4>
                <p>{post} {city}</p>
                <p className="pb-4 pt-4"><span className="font-bold">{type}</span>  • Ejerudgift {udgift} kr.</p>
                <div className="border-t-2 border-border flex flex-1 gap-5 py-2">
                    <div className="bg-bluetext text-white px-2">
                        {label}
                    </div>
                    <p>{rooms} Værelser • {størrelse} m²</p>
                    <p className="font-bold ml-auto">Kr.  {price}</p>
                </div>
            </div>

        </div>
     );
}
 
export default BoligerCard;