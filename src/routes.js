import Index from './pages/Index/Index'
import NotFound from './pages/Error/NotFound'
import ContactUs from './pages/ContactUs/ContactUs'


const routes = [
    {path: '/' , element : <Index />} , 
    {path: '*' , element : <NotFound />},
    {path: '/ContactUs' , element : <ContactUs />}
]

export default routes