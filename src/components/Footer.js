import FooterInfo from "./FooterInfo";


const Footer = () => {
    return ( 
        <footer>

            <div className="bg-grey py-12">
                <FooterInfo />
            </div>


            <div className="width py-8 flex flex-1 justify-end">
                <img src="/img/danskmægler.png" alt="Dansk mægler medlem" />
            </div>
               
            <div className="p-4 bg-blue text-white text-center">
                <p>Layout By Jit Banik 2020</p>
                <p>School project - Roskilde Tekniske Skole</p>
            </div>
        </footer>
     );
}
 
export default Footer;