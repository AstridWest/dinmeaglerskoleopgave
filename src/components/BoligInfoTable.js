

const BoligInfoTable = ({text1, text2, text3, text4, text5, data1, data2, data3, data4, data5}) => {
    return ( 
            <table className="flex flex-1">
                <tr className="flex flex-1 flex-col">
                    <td>{text1}</td>
                    <td>{text2}</td>
                    <td>{text3}</td>
                    <td>{text4}</td>
                    <td>{text5}</td>
                </tr>
                <tr className="flex flex-1 flex-col">
                    <td>{data1}</td>
                    <td>{data2}</td>
                    <td>{data3}</td>
                    <td>{data4}</td>
                    <td>{data5}</td>
                </tr>
            </table>
     );
}
 
export default BoligInfoTable;