/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { Link } from "@reach/router";
import { IoIosPaperPlane, IoIosPerson } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';

import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Topinfo = () => {
    const style = css`
        & li {
            align-items: center;
        }
    `

const { handleLogout, token } = useContext(UserContext);

    return ( 

        <div className="bg-blue text-white py-2">

            <ul className="width gap-3" css={style}>
                <li>
                    <IoIosPaperPlane />
                    <p>4000@dinmaegler.com</p>
                </li>
                <li>
                    <BsFillTelephoneFill />
                    <p>+45 7070 4000</p>
                </li>
                <li className="ml-auto">
                    <IoIosPerson />
                    <Link to="/login"><button className={`${token ? "hidden" : "block"}`}>Log ind</button></Link> 
                    <button onClick={handleLogout} className={`${token ? "block" : "hidden"}`}>Log ud</button>
                </li>
                
            </ul>

        </div>

     );
}
 
export default Topinfo;