import { useMemo, useState } from "react"
import { numberWithCommas } from "./../utilities/utlitie"
import SelectElement from "./SelectElement"
import { FaStarOfLife } from "react-icons/fa6"
import calendar from "./../assets/icons/calendar.svg"
import './../css/reserveCard.css'

const optionsList = [
    {
        name: 'هزینه استخر',
        price: 90000
    },
    {
        name: 'هزینه ماساژ',
        price: 200000
    },
    {
        name: 'هزینه صبحانه',
        price: 60000
    }
];
const numbersList = ['1 بزرگسال', '2 بزرگسال', '3 بزرگسال', '4 بزرگسال', '5 بزرگسال'];

const ReserveCard = ({ tour }) => {
    const [file, setFile] = useState('فایلی انتخاب نشده است');
    const [selectedNumber, setSelectdNumber] = useState('1 بزرگسال');
    const [costs, setCosts] = useState([
        {
            name: 'تور 7 روزه',
            price: tour.price
        },
        {
            name: 'هزینه سرویس',
            price: 60000
        }
    ]);
    
    const qty = selectedNumber.split(' ')[0];

    const totalPrice = useMemo(() => {
        return costs.reduce((total, current) => total + current.price * qty, 0);
    }, [costs, qty]);

    const totalOffer = totalPrice * tour.offer / 100;

    const fileInputHandler = (e) => {
        const file = e.target.files[0];
        if (file)
            setFile(file.name)
    };
    const costHandler = (item) => {
        setCosts(costs => costs.includes(item) ? costs.filter(x => x != item) : [...costs, item]);
    };

    return (
        <div className="reserveCard">
            <div className="titleReserveCard">
                <p className="off">{tour.offer}%</p>
                <p className="price">{numberWithCommas(tour.price)} تومان/<span>هرفرد</span></p>
            </div>
            <div className="selectDate">
                <div>
                    <label>تاریخ شروع</label>
                    <div className="customeInput">
                        <input type="date" />
                        <img src={calendar} alt="calendar" />
                    </div>
                </div>
                <div>
                    <label>تاریخ اتمام</label>
                    <div className="customeInput">
                        <input type="date" />
                        <img src={calendar} alt="calendar" />
                    </div>
                </div>
            </div>
            <div>
                <label>تعداد افراد</label>
                <SelectElement selected={selectedNumber} setSelected={setSelectdNumber} options={numbersList} uniqueClass="selectNumber" />
            </div>
            <label className="fileInput">
                <div>
                    <FaStarOfLife className="redStar" />
                    ارسال مدارک مورد نیاز
                </div>
                <input
                    id="fileInput"
                    type="file"
                    onChange={fileInputHandler}
                    hidden
                />
                <span className="fileName">{file}</span>
            </label>
            <div>
                <h5>مزایای اضافه</h5>
                <ul className="options">
                    {optionsList.map((item, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => costHandler(item)}
                                />
                                {item.name}
                            </label>
                            <span>{numberWithCommas(item.price)} تومان</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h5>هزینه ها</h5>
                <ul className="cost">
                    {costs.map((item, index) => (
                        <li key={index}>
                            {item.name}
                            <span>{numberWithCommas(item.price * qty)}</span>
                        </li>
                    ))}
                    {tour.offer && (
                        <li>
                            تخفیف
                            <span>{numberWithCommas(totalOffer)}-</span>
                        </li>
                    )}
                </ul>
            </div>
            <div className="totalPrice">
                قیمت نهایی
                <span>{numberWithCommas(totalPrice - totalOffer)} تومان</span>
            </div>
            <button className="reserveButton">رزرو کنید</button>
        </div>
    )
}

export default ReserveCard