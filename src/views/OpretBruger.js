/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Link } from "@reach/router";
import Footer from '../components/Footer';
import Header from '../components/Header';

const OpretBruger = () => {

    const style = css`
          box-shadow: 0px 10px 30px rgba(0, 115, 225, 0.06);

          & input {
               border: 1px solid #D3DEE8;
          }
    `

    const topstyle = css`
        background: #C33764; 
        background: linear-gradient(rgba(46, 49, 49, 0.7), rgba(46, 49, 49, 0.7)), url("/img/pagebackground.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding:3em;
        text-align:center;
    `

    return ( 
        <>
        <Header />
        <div css={topstyle}>
            <h3 className="text-white font-medium">Account Register</h3>
            <div className="flex flex-1 justify-center mt-5 text-sm">
              <Link to="/"><p className="text-white border-r-2 border-border pr-2">Home</p></Link>
               <p className="text-blue pl-2">Register</p>
            </div>
        </div>

        <main className="width py-20">
        <div className="border-2 border-border py-16 w-2/3 m-auto" css={style}>
               <div className="w-2/3 m-auto">
                    <h3 className="text-center font-medium text-xl pb-4">Opret bruger hos Din Mægler</h3>
                    
                    <form onSubmit="" className="flex flex-1 flex-col">

                         <label htmlFor="name" className="pb-2">Fulde navn</label>
                         <input type="text" name="name" id="name" placeholder="Fulde navn" className="mb-2 p-2" />

                         <label htmlFor="username" className="pb-2">Email adresse</label>
                         <input type="text" name="username" id="username" placeholder="Email adresse" className="mb-2 p-2" />

                         <label htmlFor="password" className="pb-2">Password</label>
                         <input type="password" name="password" id="password" placeholder="Password" className="mb-2 p-2" />

                         <label htmlFor="password2" className="pb-2">Bekræft password</label>
                         <input type="password" name="password2" id="password2" placeholder="Bekræft password" className="mb-2 p-2" />

                         <button type="submit" className="py-2 my-2 bg-blue text-white">Opret bruger</button>
                    </form>

               </div>
            </div>
        </main>
        <Footer />
        </>
     );
}
 
export default OpretBruger;