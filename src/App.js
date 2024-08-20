import BG from './assest/BG/BG'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {useRoutes} from 'react-router-dom'
import routes from './routes';
import UXbox from './Components/UXbox/UXbox';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';   
import Ripple from './assest/Ripple/Ripple';

function App() {

  let router = useRoutes(routes) 

  return (
      <Container>
      <BG />
      <Ripple />
        <Header></Header>

      <UXbox></UXbox>
      {router}
      <Footer></Footer>
      </Container>
  );
}

export default App;
