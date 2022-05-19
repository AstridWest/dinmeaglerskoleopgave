import axios from "axios";
import { useEffect, useState } from "react";
import BoligerCard from "../components/BoligerCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import BoligerFilter from "../components/BoligerFilter";
import Heart from "../components/Heart";
import { Link } from "@reach/router";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Boliger = () => {

    const [boliger, setBoliger] = useState();
    const [loading, setLoading] = useState(true);
    //const [villa, setVilla] = useState();

    useEffect(() => {
        axios("https://dinmaegler.herokuapp.com/homes")
        .then((result) => {
            setBoliger(result.data);
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        axios("https://dinmaegler.herokuapp.com/homes?type_eq=Ejerlejlighed")
        .then((result) => {
            console.log(result.data)
        })
    }, []);

    // const createSliderWithTooltip = Slider.createSliderWithTooltip;
    

    return loading ? (
		<h1 className="text-center pt-20">Please hold, it´s loading...</h1>
	) : (
        <>
        <Header />
        <PageTitle title="Boliger til salg"/>
        <main className="width">

            <div className="pt-16">
                <h3 className="font-bold pb-4"><span className="border-b-2">Søg</span> efter dit drømmehus</h3>
                <BoligerFilter />


                <Slider />

            </div>
           
            <ul className="grid grid-cols-2 grid-rows-2 gap-4 my-16" >
                {boliger?.map((item) => (
                    <li key={item.id} className="relative">
                    <Link to={`/boliginfo/${item.id}`}>
                        <BoligerCard  img={item?.images[0].url} road={item?.adress1} post={item?.postalcode} city={item?.city} type={item?.type} label={item?.energylabel} rooms={item?.rooms} price={item?.price} udgift={item?.cost} størrelse={item?.livingspace} /> 
                    </Link>
                    
                        <Heart id={item.id} />
                    </li>
                ))}
            </ul>
           
        </main>    
        <Footer />
        </>
     );
}
 
export default Boliger;