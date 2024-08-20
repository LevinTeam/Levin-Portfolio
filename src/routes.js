import Index from './pages/Index/Index'
import ContactUs from './pages/ContactUs/ContactUs'
import NotFound from './pages/Error/NotFound'
import Login from './pages/Login/Login'


const routes = [
    {path: '/' , element : <Index />} , 
    {path: '/ContactUs' , element : <ContactUs />} , 
    {path: '/Login' , element : <Login />} , 
    {path: '*' , element : <NotFound />}
]

export default routes