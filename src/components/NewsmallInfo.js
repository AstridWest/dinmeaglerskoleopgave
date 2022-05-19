import IconLightBlue from "./IconLightBlue";

const NewsmallInfo = ({title, text, icon}) => {
    return ( 
        <div className="flex flex-1 gap-4">
            <div className="w-2/6">
                <IconLightBlue icon={icon} />
            </div>
            <div>
                <h3 className="text-bluetext font-bold">{title}</h3>
                <p className="">{text}</p>    
            </div>
            
        </div>
     );
}
 
export default NewsmallInfo;