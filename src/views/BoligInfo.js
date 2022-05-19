import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

// import BoligInfoTopCard from "../components/BoligInfoTopCard";
// import BoligIcons from './BoligIcons';
import { IoImageOutline, IoLayersOutline, IoHeartOutline, IoLocationOutline } from 'react-icons/io5'

import BoligInfoTable from "../components/BoligInfoTable";
import InfoAgent from "../components/InfoAgent";

const BoligInfo = ({id}) => {

    const [boliger, setBoliger] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`https://dinmaegler.herokuapp.com/homes/${id}`)
        .then((result) => {
            setBoliger(result.data)
            setLoading(false);
        })
    }, [id]);

    const clickimage = () => {
        
    }

    return loading ? (
		<h1 className="text-center pt-20">Please hold, it´s loading...</h1>
	) : (
        <>
        <div className="test bg-mask fixed bg-cover bg-center w-full h-full z-10 hidden">
            <img src="" alt="" />
        </div>

        <Header />
        <main>
            
            <img className="max-h-screen w-full" src={boliger?.images[0].url} alt="How the place looks" /> 
        
        <div className="width">

            {/* <BoligInfoTopCard adresse={boliger?.adress1} postalcode={boliger?.postalcode} city={boliger?.city} cost={boliger?.price} /> */}
        <div className="flex flex-1 justify-between pb-4 my-10 border-border border-b-2">
            <div className="text-l">
                <p className="font-bold"> {boliger?.adress1} </p>
                <p className="font-bold"> {boliger?.postalcode} {boliger?.city} </p>
            </div>
            <div className="flex flex-1 gap-12 justify-center text-4xl text-textgrey">
                <IoImageOutline onClick={clickimage} />
                <IoLayersOutline />
                <IoLocationOutline />
                <IoHeartOutline />
            </div>
            <p className="font-bold text-2xl self-center">kr. {boliger?.price}</p>
        </div>


        <div className="flex flex-1 gap-16 text-sm">
            <BoligInfoTable 
                data1={boliger?.id} 
                data2={boliger?.floorplan.size} 
                data3={boliger?.lotsize} 
                data4={boliger?.rooms}

                text1="Sagsnummer:"
                text2="Boligareal:"
                text3="Grundareal:"
                text4="Rum/værelser:"
                text5="Antal Plan:" 
                />

            <BoligInfoTable 
                data1={boliger?.basementsize} 
                data2={boliger?.built} 
                data3={boliger?.remodel} 
                data4={boliger?.energylabel}

                text1="Kælder:"
                text2="Byggeår:"
                text3="Ombygget:"
                text4="Energimærke"
                />

            <BoligInfoTable 
                data1={boliger?.payment} 
                data2={boliger?.lat} 
                data3={boliger?.netto} 
                data4={boliger?.cost}

                text1="udbetaing:"
                text2="Brutto ex ejerudgift:"
                text3="Netto ex ejerudgift:"
                text4="Ejerudgifter:"
                />
        </div>

        <div className="flex flex-1 gap-4 py-12">
            <div className="flex-1">
               <h3 className="font-bold py-4 text-lg">Beskrivelse</h3>
                <p> {boliger?.description} </p> 
            </div>
            
            <div className="flex-1">
                <h3 className="font-bold py-4 text-lg">Ansvalig mægler </h3>
                <div className="border-2 border-border p-2">
                    <InfoAgent agentimage={boliger?.agent.image.url} name={boliger?.agent.name} title={boliger?.agent.title} email={boliger?.agent.email} number={boliger?.agent.phone} />
                </div>
            </div>
        </div>
            
        </div>
        </main>
        <Footer />
        </>
     );
}
 
export default BoligInfo;