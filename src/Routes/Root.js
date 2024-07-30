import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import CheckAccess from "../HOC/CheckAccess";

//design partern
function Root() {
  return (
    // <CheckAccess>
    //   <Header />
    //   <Outlet />
    //   <Footer />
    // </CheckAccess>
    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  );
}

export default Root;
