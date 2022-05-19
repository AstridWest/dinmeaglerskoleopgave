import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import FavoriteCard from "../components/FavoriteCard";
import { IoSearchOutline } from "react-icons/io5";

const Favoritter = () => {

    const { favorites } = useContext(UserContext);
    console.log(favorites)
    
    return ( 
        <>
            <Header />
            <PageTitle title="Mine Favoritboliger" />
            <main className="width">

                <div className="pt-12 border-b-2 border-border">
                    <div className="border-2 border-border mb-3 flex flex-1 gap-2 w-1/4">
                        <div className="self-center text-textgrey pl-2 py-2"><IoSearchOutline /></div>
                        <input className="" type="search" name="search" id="search" placeholder="Søg i favoritter" />
                    </div>
                </div>

                <ul className="flex flex-1 flex-col pb-12 pt-4">
                {favorites?.map((item) => (
                        <li className="py-4">
                            <FavoriteCard id={item.id} img={item?.images[0].url} road={item?.adress1} post={item?.postalcode} city={item?.city} type={item?.type} label={item?.energylabel} rooms={item?.rooms} price={item?.price} udgift={item?.cost} størrelse={item?.livingspace} />
                        </li>
                ))}
                </ul>
            </main>
            <Footer />
        </>
     );
}
 
export default Favoritter;