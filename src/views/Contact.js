import ContactInformationCard from "../components/ContactInformationCard";
import ContactMedarbejder from "../components/ContactMedarbejder";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { IoCallSharp, IoPaperPlaneSharp, IoLocationSharp } from "react-icons/io5";

const Contact = () => {
    return ( 
       <>
        <Header />
        <PageTitle title="Kontakt os" />
        <main className="width pb-16">
            <div className="my-8">
                <h3 className="font-bold text-xl pb-4">Vi sidder klar til at besvare dine spørgsmål</h3>
                <p>Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
            </div>

            <div className="flex flex-1 justify-center gap-8">
                <div className="border-2 border-border p-8 flex-1">
                    <ContactMedarbejder />
                </div>

                <div className="border-2 border-border p-4">
                    <ContactInformationCard icon={<IoCallSharp />} what="Ring til os" information="++45 7070 4000" />
                    <ContactInformationCard icon={<IoPaperPlaneSharp />} what="send en mail" information="4000@dinmaegler.dk" />
                    <ContactInformationCard icon={<IoLocationSharp />} what="Besøg butikken" information="Stændertorvet 78, 4000 Roskilde" />
                </div>
            </div>
            
        </main>
        <div>
            <img src="/img/map.png" alt="et kort over lokalitionen" />
        </div>
        <Footer />
       </>
     );
}
 
export default Contact;