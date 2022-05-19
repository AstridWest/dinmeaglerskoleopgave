import Button from "../components/Button";
import Header from "../components/Header";

const ErrorPage = () => {
    return ( 
        <>
        <Header />
        <main>
            <div className="bg-lightblue text-center py-20">
                <img src="/img/hov.png" alt="Hov!" className="w-1/4 m-auto pb-4" />
                <h3 className="text-2xl font-bold pb-3">Du er havnet på en side som ikke findes!</h3>
                <p className="text-sm w-1/3 m-auto pb-7">Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau, og bedt dem se på fejlen.</p>

                <Button text="Tilbage til forsiden" />
            </div>
        </main>
        </>
     );
}
 
export default ErrorPage;