import './../css/cardProduct.css'
import { FaStar } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../utilities/utlitie'

const CardProduct = ({ data }) => {
    return (
        <ul className='cardContainer'>
            {data.map(item => (
                <li key={item.id} className="card">
                    <Link to={`/tour/${item.id}`}>
                        <img src={item.image} alt={item.name} />
                        <div className="details">
                            <h3>{item.name}</h3>
                            <div className="score">
                                <FaStar />
                                <span>{item.score}</span>
                            </div>
                        </div>
                        <div className="duration">{item.duration}</div>
                    </Link>
                    <div className="footerCard">
                        <div>
                            {numberWithCommas(item.price)} تومان
                            <span>(هر فرد)</span>
                        </div>
                        <button className="addButton">
                            <FaPlus />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default CardProduct