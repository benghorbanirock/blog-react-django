import { useState } from "react"
import './../css/tabs.css'

const Tabs = ({ data }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabsContainer">
            <ul className="tabsTitle">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className={`${activeTab == index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >{item.name}</li>
                ))}
            </ul>
            <ul className="tabsContent">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className={`${activeTab == index ? 'active' : ''}`}
                    >{item.description}</li>
                ))}
            </ul>
        </div>
    )
}

export default Tabs