import Index from './pages/Index/Index'
import NotFound from './pages/Error/NotFound'


const routes = [
    {path: '/' , element : <Index />} , 
    {path: '*' , element : <NotFound />}
]

export default routes