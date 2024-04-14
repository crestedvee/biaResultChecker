import Root from '../components/Root/root';
import Home from '../components/Home/home';
import About from '../components/About/about';
import Contact from '../components/Contact/contact';
import Result from '../components/Result/result';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }> 
    <Route path="/" element={<Home />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact/>} />
    <Route path="/result" element={<Result/>}/>
  </Route>
 )
)
function App() {
  return (
    <RouterProvider router={router}/>
   );
}

export default App;
