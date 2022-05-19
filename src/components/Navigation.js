
import { Link } from "@reach/router";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Navigation = () => {

    const { token } = useContext(UserContext);

    return ( 
        <nav className="width flex items-end justify-between p-4">
            <Link to="/"> <img src="/img/logo.png" alt="Logo" /></Link>
            <ul className="gap-6">
                <li>
                    <Link to="/boliger"><button>Boliger til salg</button></Link>
                </li>
                <li>
                    <Link to="/medarbejdere"><button>Mæglere</button></Link>
                </li>
                <li className={`${token ? "block" : "hidden"}`}>
                    <Link to="/favorit"><button>Mine favoritter</button></Link> 
                </li>
                <li>
                    <Link to="/kontakt"><button>Kontakt os</button></Link> 
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;