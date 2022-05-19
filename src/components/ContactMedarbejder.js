import Button from "./Button";
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const ContactMedarbejder = () => {
    const style = css`

        & input {
            border:1px solid #D3DEE8;
            padding:0.5em;
        }
    `
    return ( 
        <form action="" className="grid grid-cols-2 grid-rows-7 gap-3 m-4" css={style}>
            <label htmlFor="name">Navn</label>
            <label htmlFor="email">Email</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Indtast navn" 
            />
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Indtast email" 
            />

            <label className="col-span-2" htmlFor="emne">Emne</label>
            <input className="col-span-2" 
                type="text"
                name="emne"
                id="emne" 
                placeholder="Hvad drejer din henvendelse sig om?" />

            <label className="col-span-2" htmlFor="besked">Besked</label>
            <textarea className="col-span-2" 
                placeholder="Skriv din besked her..." 
                name="besked" 
                id="besked" 
                cols="30" 
                rows="10">
            </textarea>

            <div>
                <Button text="Send besked" />
            </div>  
        </form>
     );
}
 
export default ContactMedarbejder;