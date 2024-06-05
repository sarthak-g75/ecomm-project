import Categories from "../Categories/Categories";
import Facilities from "../Facilities/Facilities";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NewArrival from "../NewArrival/NewArrival";
import Carousel from "../carousel/Carousel";
import Featured from "../featured/Features";


const Main = ()=>{
    return(
        <div className="main">
            <Navbar/>
            <Carousel/>
            <Categories/>
            <Featured/>
            <NewArrival/>
            <Facilities/>
            <Footer/>
        </div>
    )
}

export default Main;