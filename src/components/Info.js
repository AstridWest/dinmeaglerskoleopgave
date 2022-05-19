import Smallinfo from "./Smallinfo";
import NewsmallInfo from "./NewsmallInfo";

const Info = () => {
    return ( 
        <div className="width">
        <div className="flex flex-1 my-14 pb-16 border-b-2 border-border gap-16">
            <img src="img/Image.png" alt="38+ års erfaring" />

            <div>
                <h2 className="pr-24 pb-8">Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                <h4 className="text-bluetext text-lg font-semibold pb-4">Det synes vi siger noget om os!</h4>
                <p className="pb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            
            <div className="flex flex-1 mt-12">
                <Smallinfo icon="img/houseinhand.png" title="4829" text="boliger solgt" />
                <Smallinfo icon="img/home.png" title="158" text="boliger til salg" />
            </div>  

            </div>
        </div>

        <div className="flex-1 flex mb-20 gap-12">
            <NewsmallInfo icon="img/property.png" title="Bestil et salgstjek" text="Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig." />
            <NewsmallInfo icon="img/pin.png" title="74 butikker" text="Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark." />
            <NewsmallInfo icon="img/personinhand.png" title="Tilmeld køberkartotek" text="Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret." />
        </div>
        </div>
     );
}
 
export default Info;