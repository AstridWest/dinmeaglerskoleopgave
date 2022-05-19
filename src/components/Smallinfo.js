import IconLightBlue from "./IconLightBlue";


const Smallinfo = ({title, text, icon}) => {
    return ( 
        <div className="flex-1 flex align-center gap-4">
            <IconLightBlue icon={icon} />

            <div className="self-center">
                <h3 className="text-bluetext font-bold">{title}</h3>
                <p>{text}</p>
            </div>
        </div>
     );
}
 
export default Smallinfo;