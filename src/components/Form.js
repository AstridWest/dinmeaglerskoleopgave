const Form = () => {
    return ( 
        <form className="flex flex-1 flex-col">
            <label htmlFor="identifier">E-mail:</label>
            <input type="email" name="identifier" id="identifier" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />

            <button type="submit">Log in</button>
        </form>
     );
}
 
export default Form;