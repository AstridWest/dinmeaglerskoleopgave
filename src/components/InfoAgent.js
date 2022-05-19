import { IoLogoSkype, IoLogoLinkedin, IoLogoInstagram, IoCall, IoPaperPlaneSharp } from 'react-icons/io5'

const InfoAgent = ({agentimage, name, title, number, email}) => {
    return ( 
        <>
            <div className="flex flex-1">

                <div className="relative">
                    <img src={agentimage} alt="Agent" />

                    <div className="bg-blue text-white py-1 px-4 flex flex-1 gap-2 absolute bottom-8">
                        <IoLogoInstagram />
                        <IoLogoLinkedin />
                        <IoLogoSkype />
                    </div>
                </div>

                <div className="p-4">
                    <h4 className="font-bold">{name}</h4>
                    <p className="text-textgrey py-3">{title}</p>

                    <div className="flex flex-1 gap-2 pt-4">
                        <p className="self-center"><IoCall /></p>
                        <p className="self-center">{number}</p>
                    </div>

                    <div className="flex flex-1 gap-2 pt-2">
                        <p className="self-center"><IoPaperPlaneSharp /></p>
                        <p className="self-center"> {email} </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default InfoAgent;