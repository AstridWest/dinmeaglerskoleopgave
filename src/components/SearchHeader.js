/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import Button from './Button';

const SearchHeader = () => {
    const style = css`
        background: #C33764; 
        background: linear-gradient(rgba(46, 49, 49, 0.7), rgba(46, 49, 49, 0.7)), url("img/architecture.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding:10em;

        & input {
            border: 1px solid #7B7B7B;
            width: 100%;
            margin:0.5em 0;
            padding: 0.4em;
            margin-right: 0.6em;
        }
    `
    return ( 
        <>
        <div css={style}>
            <h1 className="text-white text-center p-4">Søg efter din drømmebolig</h1>

            <div className="bg-white text-darktext p-8">
                <h3 className="font-semibold"><span className="border-b-2">Søg</span> blandt 158 boliger til salg i 74 butikker</h3>
                <p className="pt-4">Hvad skal din næste bolig indeholde</p>

                <input type="search" name="search" id="search" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" />
                <Button text="Søg" />

                <form action="search"></form>
            </div>
        </div>
        </>
     );
}
 
export default SearchHeader;