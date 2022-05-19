

const ContactInformationCard = ({icon, what, information}) => {
    return ( 
        <div className="border-b-2 border-border flex flex-1 flex-col text-center pt-8 pb-8 px-8">
            <div className="bg-blue text-white rounded-full p-3 self-center m-auto">{icon}</div>
            <p className="pb-3 pt-2"> {what} </p>
            <p> {information} </p>
        </div>
     );
}
 
export default ContactInformationCard;