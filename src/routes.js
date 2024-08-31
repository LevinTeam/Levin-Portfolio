import Index from './pages/Index/Index'
import ContactUs from './pages/ContactUs/ContactUs'
import NotFound from './pages/Error/NotFound'
import Login from './pages/Login/Login'
import Blog from './pages/Blog/Blog'
import SinglePageBlog from './pages/Blog/SinglePageBlog/SinglePageBlog'
import AboutUs from './pages/AboutUs/AboutUs'
import FAQ from './pages/FAQ/FAQ'
import Privacy from './pages/Privacy/Privacy'

const routes = [
    {path: '/' , element : <Index />} , 
    {path: '/ContactUs' , element : <ContactUs />} , 
    {path: '/Login' , element : <Login />} , 
    {path: '/Blog' , element : <Blog />} , 
    {path: '/Blog/:SinglePageBlogID' , element : <SinglePageBlog />} , 
    {path: '/AboutUs' , element : <AboutUs />} , 
    {path: '/FAQ' , element : <FAQ />} , 
    {path: '/Privacy' , element : <Privacy />} , 
    {path: '*' , element : <NotFound />}
]

export default routes