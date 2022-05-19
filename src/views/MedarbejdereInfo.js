import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import InfoAgent from "../components/InfoAgent";
import ContactMedarbejder from "../components/ContactMedarbejder";

const MedarbejdereInfo = ({id}) => {

    const [medarbejder, setMedarbejder] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`https://dinmaegler.herokuapp.com/agents/${id}`)
        .then((result) => {
            setMedarbejder(result.data)
            setLoading(false);
        })
    }, [id]);

    return loading ? (
		<h1 className="text-center pt-20">Please hold, it´s loading...</h1>
	) : (
        <div>
            <Header />
            <PageTitle title="Kontakt en medarbejder" />
            <main className="width flex flex-1 py-16">
                <div className="border-2 border-border p-8 flex-2 w-2/3"> 
                    <InfoAgent agentimage={medarbejder?.image.url} name={medarbejder?.name} title={medarbejder?.title} email={medarbejder?.email} number={medarbejder?.phone} />
                
                    <h4 className="font-bold py-6"> <span className="border-b-2">Om</span> {medarbejder?.name}</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="my-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
                <div className="border-2 border-border mt-4">
                    <h4 className="m-4 font-bold"> <span className="border-b-2 border-black pb-2">Kontakt</span> {medarbejder?.name} </h4>
                    <ContactMedarbejder />
                </div>
                    
                </div>

                <div className="flex-1 mx-10">
                    <div className="bg-lightblue py-6 px-4 mb-4">
                        <h3 className="border-b-2 border-border pb-2">Search Property</h3>
                        <input className="my-4 border-2 border-border" type="search" name="search" id="search" placeholder="Search" />
                    </div>
                    <div className="bg-blue text-white text-center px-4 py-32 text-lg">
                        <p>Find The Best Property</p>
                        <p>For Rent Or Buy</p>
                        <p>Call Us Now</p>
                        <p>+00 123 456 789</p>
                    </div>
                </div>
                
            </main>
            <Footer />
        </div>
     );
}
 
export default MedarbejdereInfo;