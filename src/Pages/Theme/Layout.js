
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout =() =>{
    return(
        <div>
            <Header />
            <Sidebar />
            
            <div class="box-3" style={{color: "#ffffff"}}>
                <Outlet/>
            </div> 
            <Footer />
        </div>
    );
}

export default Layout;