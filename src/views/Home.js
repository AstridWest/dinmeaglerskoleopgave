import UdvalgteBoliger from "../components/UdvalgteBoliger";
import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer";
import SearchHeader from "../components/SearchHeader";
import Nyhedsbrev from "../components/Nyhedsbrev";
import UdvalgteMedarbejdere from "../components/UdvalgteMedarbejdere";
import Updates from "../components/Updates";

const Home = () => {
    return ( 
        <>
            <Header />
            <SearchHeader />
            <main>
                <Info />
                <div className="bg-grey">
                   <UdvalgteBoliger /> 
                </div>
                
                <Nyhedsbrev />
                <UdvalgteMedarbejdere />
                <Updates />
            </main>
            <Footer />
        </>
     );
}
 
export default Home;