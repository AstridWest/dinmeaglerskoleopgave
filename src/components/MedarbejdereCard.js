/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

import { BsEnvelopeFill, BsLinkedin } from 'react-icons/bs';

const MedarbejdereCard = ({img, who, title, id}) => {

    const style = css`
        box-shadow: 0px 10px 30px 0px #0073E10F;

    `
    return ( 
        <div key={id} className="text-center pb-8 rounded-sm" css={style}>
            <img src={img} alt="Medarbejder" className="rounded-t-sm" />
            <h3 className="pt-2 font-bold">{who}</h3>
            <p>{title}</p>

            <div className="flex flex-1 justify-center gap-4 pt-4 text-darktext">
                <BsEnvelopeFill /> 
                <BsLinkedin />
            </div>
            
        </div>
     );
}
 
export default MedarbejdereCard;