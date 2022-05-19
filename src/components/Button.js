/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const Button = ({text}) => {

    const style = css`
        padding: 0.5em 2em;
        border-radius: 2px;
    `
    return ( 
        <button css={style} className="bg-blue text-white">
            {text}
        </button>
     );
}
 
export default Button;