/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const PhoneButton = ({text, icon, filled}) => {
    const style = css`
        border: 1px solid #fff;
    `
    return ( 
        <button css={style}
        className={`flex flex-1 gap-2 py-2 px-4 mr-4 ${filled ? "bg-white text-blue" : "text-white"}`}>
            <p className="self-center">{icon}</p>
            <p className="self-center">{text}</p>
        </button>
     );
}
 
export default PhoneButton;