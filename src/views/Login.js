/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

import { Link } from "@reach/router";
import Header from "../components/Header";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Redirect } from '@reach/router';
import Footer from '../components/Footer';

const Login = () => {
     const style = css`
          box-shadow: 0px 10px 30px rgba(0, 115, 225, 0.06);

          & input {
               border: 1px solid #D3DEE8;
          }
    `

     const { handleLogin, token } = useContext(UserContext);

     const handleSubmit = (e) => {
          e.preventDefault();
          handleLogin(e.target.username.value, e.target.password.value)
     }

     const topstyle = css`
        background: #C33764; 
        background: linear-gradient(rgba(46, 49, 49, 0.7), rgba(46, 49, 49, 0.7)), url("/img/pagebackground.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding:3em;
        text-align:center;
    `

    return !token ? ( 
        <>
         <Header />
          <div css={topstyle}>
            <h3 className="text-white font-medium">Account Login</h3>
            <div className="flex flex-1 justify-center mt-5 text-sm">
               <Link to="/"><p className="text-white border-r-2 border-border pr-2">Home</p></Link>
               <p className="text-blue pl-2">Login</p>
            </div>
            
          </div>

          <main className="width py-20">
            <div className="border-2 border-border py-16 w-2/3 m-auto" css={style}>
               <div className="w-2/3 m-auto">
                    <h3 className="text-center font-medium text-xl pb-4">Log ind på din konto</h3>
                    
                    <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
                         <label htmlFor="username" className="pb-2">Email</label>
                         <input type="text" name="username" id="username" placeholder="Email" className="mb-2 p-2" />

                         <label htmlFor="password" className="pb-2">Password</label>
                         <input type="password" name="password" id="password" placeholder="Password" className="mb-2 p-2" />

                         <button type="submit" className="py-2 my-2 bg-blue text-white">Log in</button>
                    </form>

                    <p className="mt-8 mb-3">Log ind med</p>
                    <div className="flex flex-1 gap-2">
                    <button className="text-white bg-button1 py-2 w-full">Google</button>
                    <button className="text-white bg-button2 py-2 w-full">Facebook</button>
                    <button className="text-white bg-blue py-2 w-full">Twitter</button>
                    </div>
                    <p className="text-center mt-8 text-sm">Har du ikke en konto? <Link to="/opretbruger"><span className="text-linkblue"> Opret bruger.</span></Link></p>
               </div>
            </div>
          </main>

           <Footer />
        </>
     ) : (
          <Redirect to="/favorit" noThrow />
     )
}
 
export default Login;