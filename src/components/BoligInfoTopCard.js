import BoligIcons from './BoligIcons';

const BoligInfoTopCard = ({adresse, postalcode, city, cost}) => {
    return ( 
        <div className="flex flex-1 justify-between pb-4 my-10 border-border border-b-2">
        <div className="text-l">
            <p className="font-bold"> {adresse} </p>
            <p className="font-bold"> {postalcode} {city} </p>
        </div>
        <BoligIcons />
        <p className="font-bold text-2xl self-center">kr. {cost}</p>
    </div>
     );
}
 
export default BoligInfoTopCard;