import axios from "axios";
import { useEffect, useState } from "react";
import MedarbejdereCard from "./MedarbejdereCard";
import Button from "./Button";
import { Link } from "@reach/router";

const UdvalgteMedarbejdere = () => {

    const [medarbejder, setMedarbejder] = useState();

    useEffect(() => {
        axios("https://dinmaegler.herokuapp.com/agents?_limit=3")
        .then((result) => {
            setMedarbejder(result.data)
        })
    }, []);

    return ( 
        <div className="width py-16">
            <div className="text-center py-8">
                <h2 className="pb-8">Mød vores engagerede medarbejdere</h2>
                <p className="text-sm">Din Mægler er garant for altid veluddannet assistance i dit boligsalg.</p>
                <p className="text-sm">Kontakt en af vores medarbejdere.</p>
            </div>

        <div className="grid grid-cols-3 grid-rows-1 gap-4">
            {medarbejder?.map((item) => (
                <Link to={`/medarbejderinfo/${item.id}`}>
                    <div key={item.id}>
                    <MedarbejdereCard who={item.name} title={item.title} img={item.image.url} /> 
                    </div>
                </Link>
            ))}
        </div>   

            <div className="text-center pt-12">        
                <Link to="medarbejdere"><Button text="Se alle mæglere" /></Link>
            </div> 
        </div>
     );
}
 
export default UdvalgteMedarbejdere;