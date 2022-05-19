/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IoIosPaperPlane } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';

const FooterInfoBoks = () => {
    const style =css`
        box-shadow: 0px 10px 30px 0px #0073E10F;
    `
    return ( 
        <div className="bg-white p-8" css={style}>

            <div className="flex flex-1 gap-4 p-2">

                <div className="bg-blue text-white rounded-full p-4">
                    <BsFillTelephoneFill />
                </div>
                <div>
                    <p>Ring til os</p>
                    <p>+45 7070 4000</p>    
                </div>
                
            </div>

            <div className="flex flex-1 gap-4 p-2">

                <div className="bg-blue text-white rounded-full p-4">
                    <IoIosPaperPlane />
                </div>
                <div>
                    <p>Send en mail</p>
                    <p>+4000@dinmaegler.com</p>
                </div>
            </div>

            <div className="flex flex-1 gap-4 p-2">

                <div className="bg-blue text-white rounded-full p-4">
                    <IoLocationOutline />
                </div>
                <div>
                    <p>Butik</p>
                    <p>Stændertorvet 78, 4000 Roskilde</p>
                </div>
            </div>

            <p className="py-8">Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
        </div>
     );
}
 
export default FooterInfoBoks;