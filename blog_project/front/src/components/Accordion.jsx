import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import './../css/accordion.css'

const Accordion = ({ data }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    return (
        <div className="accordionSection">
            <h4>برنامه تور (روز به روز)</h4>
            <ul className="accordion">
                {data.map((item, index) => (
                    <li key={index}>
                        <div
                            className="accordionTitle"
                            onClick={() => activeAccordion == index ? setActiveAccordion(null) : setActiveAccordion(index)}
                        >
                            {item.name}
                            <IoIosArrowDown className={`arrowAccordion ${activeAccordion == index ? 'active' : ''}`} />
                        </div>
                        <p className={`accordionDescription ${activeAccordion == index ? 'active' : ''}`}>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Accordion