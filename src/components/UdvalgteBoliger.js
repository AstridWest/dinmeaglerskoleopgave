import axios from "axios";
import { useEffect, useState } from "react";
import BoligerCard from "./BoligerCard";
import Button from "./Button";
import { Link } from "@reach/router";

const UdvalgteBoliger = () => {

    const [boliger, setBoliger] = useState();

    useEffect(() => {
        axios("https://dinmaegler.herokuapp.com/homes?_limit=4")
        .then((result) => {
            setBoliger(result.data)
        })
    }, []);

    return ( 
        <>
        <div className="width pb-7">
            <div className="text-center p-16">
                <h2>Udvalgte Boliger</h2>
                <p className="mx-40 text-sm">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p> 
            </div>
            
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        {boliger?.map((item) => (
                            <Link to={`/boliginfo/${item.id}`}>
                            <div key={item.id}>
                                <BoligerCard  
                                    img={item?.images[0].url} 
                                    road={item?.adress1} 
                                    post={item?.postalcode} 
                                    city={item?.city} 
                                    type={item?.type} 
                                    label={item?.energylabel} 
                                    rooms={item?.rooms} 
                                    price={item?.price} 
                                    udgift={item?.cost} 
                                    størrelse={item?.livingspace} 
                                /> 
                            </div>
                            </Link>
                        ))}
                    </div>
                <div className="text-center p-14">
                    <Link to="/boliger"><Button text="Se alle boliger" /></Link>
                </div>
        </div>
        </>
        
     );
}
 
export default UdvalgteBoliger;