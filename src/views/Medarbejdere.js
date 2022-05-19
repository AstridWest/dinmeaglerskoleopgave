import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import axios from "axios";
import { useEffect, useState } from "react";
import MedarbejdereCard from "../components/MedarbejdereCard";
import { Link } from "@reach/router";

const Medarbejdere = () => {

    const [medarbejder, setMedarbejder] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://dinmaegler.herokuapp.com/agents")
        .then((result) => {
            setMedarbejder(result.data)
            setLoading(false);
        })
    }, []);
    return loading ? (
		<h1 className="text-center pt-20">Please hold, it´s loading...</h1>
	) : (
        <>
            <Header />
            <PageTitle title="Medarbejdere i Roskilde" />
            <main className="width">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 my-20">
                {medarbejder?.map((item) => (
                    <div key={item.id}>
                    <Link to={`/medarbejderinfo/${item.id}`}>
                        <MedarbejdereCard who={item.name} title={item.title} img={item.image.url} id={item.id} /> 
                    </Link>
                    </div>
                ))}
                </div>  
            </main>
            <Footer />
        </>
     );
}
 
export default Medarbejdere;