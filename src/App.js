import Index from './pages/Index/Index';
import BG from './assest/BG/BG'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {useRoutes} from 'react-router-dom'
import routes from './routes';
import UXbox from './Components/UXbox/UXbox';
import Header from './Components/Header/Header';

function App() {

  let router = useRoutes(routes) 

  return (
      <Container>
      <BG />
        <Header></Header>
      {/* <Index /> */}
      <UXbox></UXbox>
      {router}
      </Container>
  );
}

export default App;
