/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const PageTitle = ({title}) => {

    const style = css`
        background: #C33764; 
        background: linear-gradient(rgba(46, 49, 49, 0.7), rgba(46, 49, 49, 0.7)), url("/img/pagebackground.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding:3em;
        text-align:center;
    `

    return ( 
        <div css={style}>
            <h1 className="text-white">{title}</h1>
        </div>
     );
}
 
export default PageTitle;