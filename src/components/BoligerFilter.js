

const BoligerFilter = () => {
    return ( 
        <div className="flex flex-1 flex-col">
            
            <label htmlFor="ejendomstype">Ejendomstype</label>
            <select name="ejendomstype" id="ejendomstype">
            <option value="">All</option>
                <option value="villa">Villa</option>
                <option value="landejendom">Landejendom</option>
                <option value="ejerlejlighed">Ejerlejlighed</option>
                <option value="byhus">Byhus</option>
            </select>
        </div>
     );
}
 
export default BoligerFilter;