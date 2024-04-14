import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Outlet } from "react-router-dom";


function Root(){
  return(
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default Root;