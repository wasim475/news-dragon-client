import Header from "../../Pages/Shared Pages/Header/Header";
import LeftSideNav from "../../Pages/Shared Pages/LeftSideNav/LeftSideNav";
import Navbar from "../../Pages/Shared Pages/Navbar/Navbar";
import RightSideNav from "../../Pages/Shared Pages/RightSideNav/RightSideNav";


const Home = () => {
    // console.log('object');
    return (
        <>
            <div className="text-center">
                <Header/>
                <Navbar/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <LeftSideNav/>
                <div className="col-span-2">
                    <h1>Home sweet Home</h1>
                </div>
                <RightSideNav/>
            </div>
        </>
    );
};

export default Home;