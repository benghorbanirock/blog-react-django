import { Link, useParams } from "react-router-dom"
import "./../css/detailsTour.css"
import Header from "../components/Header"
import toursData from "./../data/toursData"
import { LuBookmarkPlus } from "react-icons/lu"
import { numberWithCommas } from "./../utilities/utlitie"
import wifi from "./../assets/icons/wifi.svg"
import medical from "./../assets/icons/medical.svg"
import lunch from "./../assets/icons/lunch.svg"
import breakfast from "./../assets/icons/breakfast.svg"
import CardProduct from "./../components/CardProduct"
import Footer from "./../components/Footer"
import { FaArrowLeft } from "react-icons/fa6"
import Tabs from "../components/Tabs"
import Accordion from "../components/Accordion"
import ReserveCard from "../components/ReserveCard"

const featuresList = [
    {
        name: 'وای فای رایگان',
        icon: wifi
    },
    {
        name: 'بیمه مسافرتی',
        icon: medical
    },
    {
        name: 'ناهار رایگان',
        icon: lunch
    },
    {
        name: 'صبحانه رایگان',
        icon: breakfast
    }
];

const DetailsTour = () => {
    const { id } = useParams();
    const tour = toursData.find(item => item.id == id);
    const filteredData = toursData.filter(item => item.category == tour.category).slice(0, 3);

    return (
        <>
            <Header />
            <div className="detailsContainer">
                <div className="buttonAndBookmark">
                    <h2>{tour.name}</h2>
                    <button>
                        <LuBookmarkPlus />
                    </button>
                    <Link to="/">
                        بازگشت به خانه
                        <FaArrowLeft />
                    </Link>
                </div>
                <div className="containerImage">
                    <img src={tour.largeImage} alt={tour.name} className="detailsImage" />
                    <div>
                        {tour.enName}
                        <img src={tour.flag} alt="flag" />
                    </div>
                </div>
                <div className="bodyDetails">
                    <div>
                        <Tabs data={tour.tabs} />
                        <div className="reserveSection">
                            <span>{numberWithCommas(tour.price)} تومان</span>
                            <button>رزرو کنید</button>
                        </div>
                        <div className="features">
                            <h4>امکانات برتر</h4>
                            <ul>
                                {featuresList.map((item, index) => (
                                    <li key={index}>
                                        <img src={item.icon} alt={item.name} className="featuresImage" />
                                        <span>{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Accordion data={tour.accordion} />
                    </div>
                    <ReserveCard tour={tour} />
                </div>
                <div className="relativeTours">
                    <div className="relativeToursTitle">
                        <h3>تورهای مشابه</h3>
                        <button>دیدن همه</button>
                    </div>
                    <CardProduct data={filteredData} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailsTour