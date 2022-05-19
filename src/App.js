import './App.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import Login from './views/Login';
import OpretBruger from './views/OpretBruger';
import Boliger from './views/Boliger';
import Medarbejdere from './views/Medarbejdere';
import BoligInfo from './views/BoligInfo';
import Contact from './views/Contact';
import Favoritter from './views/Favoritter';
import MedarbejdereInfo from './views/MedarbejdereInfo';
import UserContextProvider from './contexts/UserContext';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <UserContextProvider>
    <Router>
      <Home path="/" />

      <Boliger path="boliger" />
      <BoligInfo path="boliginfo/:id" />
      
      <Medarbejdere path="medarbejdere" />
      <MedarbejdereInfo path="medarbejderinfo/:id" />

      <Login path="login" />
      <OpretBruger path="opretbruger" />
      
      <Contact path="kontakt" />
      <Favoritter path="favorit" />

      <ErrorPage path="error" />
      
    </Router>
    </UserContextProvider>
  );
}

export default App;
