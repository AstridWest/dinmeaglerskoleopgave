import FooterInfoBoks from "./FooterInfoBoks";
import { Link } from "@reach/router";

const FooterInfo = () => {
    return ( 
        <div className="width">
            <div className="pb-8">
                <img src="/img/logo.png" alt="Din mægler logo" />
                <p className="pt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
            </div>

            <div className="flex flex-1 gap-28">
                <FooterInfoBoks />
                <div className="flex flex-1 flex-col">
                    <p className="text-lg font-medium pb-2">Quick Links</p>
                    <Link to="/boliger">Boliger til salg</Link>
                    <Link to="/medarbejdere">Mæglere</Link>
                    <Link to="/kontakt">Kontakt os</Link>
                    <Link to="/login">Log ind / bliv bruger</Link>
                </div>
            </div>
        </div>
    );
}
 
export default FooterInfo;