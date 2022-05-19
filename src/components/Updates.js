import PhoneButton from "./PhoneButton";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5"


const Updates = () => {
    return ( 
        <>
        <div className="bg-blue text-white">
            <div className="width flex flex-1 gap-24 pt-12">
                <div className="flex-1 self-center">
                    <h2 className="text-white pr-52">Hold dig opdateret på salgsprocessen</h2>
                    <p className="pt-4">Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>

                    <div className="flex flex-1 w-2/3 pt-6">
                        <PhoneButton filled text="Google Play" icon={<IoLogoGooglePlaystore />} />
                        <PhoneButton text="Apple Store" icon={<IoLogoApple />} />
                    </div>
                </div>

                <div className="flex-2">
                    <img src="/img/mobiler.png" alt="mobiler" />
                </div>
            </div>

        </div>
        </>
     );
}
 
export default Updates;