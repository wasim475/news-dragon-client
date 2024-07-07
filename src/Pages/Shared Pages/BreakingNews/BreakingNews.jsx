import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <div>
           <button className="btn btn-secondary">Breaking News:
            <Marquee pauseOnHover={true}>
            A reporter's call to service in Ukraine, and what is left behind...Seeing industrial pollution through a journalist's lens... How a Report for the World newsroom is tracking desertification in Brazil...
            </Marquee>
           </button> 
        </div>
    );
};

export default BreakingNews;