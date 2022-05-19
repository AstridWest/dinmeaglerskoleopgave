/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BsArrowRight } from "react-icons/bs";

const Nyhedsbrev = () => {
    const style = css`
        background: #C33764; 
        background: linear-gradient(rgba(46, 49, 49, 0.8), rgba(46, 49, 49, 0.8)), url("img/nyhedbrev.png");
    `

        // fetch("https://dinmaegler.herokuapp.com/subscribers", {
        // "method": "POST",
        // "headers": {
        //     "Content-Type": "application/json"
        // },
        // "body": {
        //     "email": "hans@hansen.dk"
        // }
        // })
        // .then(response => console.log(response))
        // .catch(err => console.error(err));


    return ( 
        <div className="text-white py-20" css={style}>
            <div className="width flex flex-1 gap-4">
                <p className="font-bold text-xl self-center">Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</p>
                
                <form action="" className="bg-white flex flex-1 justify-between p-2 rounded-sm">
                    <input className="pr-32" type="email" placeholder="Indtast din email adresse" />
                    <button type="submit self-center" className="text-bluetext"><BsArrowRight /></button>
                </form>

            </div>
        </div>
     );
}
 
export default Nyhedsbrev;