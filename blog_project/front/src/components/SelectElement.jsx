import { useState } from "react"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    cursor: pointer;
    width: 100%;

    svg {
        font-size: 1.2rem;
    }
`;
const Ul = styled.ul`
    position: absolute;
    width: 100%;
    top: 100%;
    right: 0;
    z-index: 10;
    margin-top: .25rem;
    border: 1.5px solid var(--stroke);
    box-shadow: 0 10px 10px rgba(0, 0, 0, .5);
`;
const Li = styled.li`
    padding: .5rem 0;
    border-bottom: 1.5px solid var(--stroke);

    &:hover {
        background-color: #387ADF;
        color: white;
    }
    &:first-child {
        border-start-start-radius: inherit;
        border-start-end-radius: inherit;
    }
    &:last-child {
        border: none;
        border-end-start-radius: inherit;
        border-end-end-radius: inherit;
    }
`;

const SelectElement = ({ selected, setSelected, options, uniqueClass }) => {
    const [show, setShow] = useState(false);
    const clickable = [`${uniqueClass}`, 'selectMenu', 'options'];

    show && window.addEventListener('click', (e) => {
        const classList = e.target.className.split(' ');
        let include = false;
        classList.forEach(item => {
            if (clickable.includes(item))
                include = true;
        });
        if (!include)
            setShow(false);
    });

    return (
        <Div
            className={`${uniqueClass}`}
            onClick={() => setShow(prev => !prev)}
        >
            {selected}
            <MdOutlineKeyboardArrowDown />
            {show && (
                <Ul className="selectMenu">
                    {options.map((item, index) => (
                        <Li
                            key={index}
                            className="options"
                            onClick={() => setSelected(item)}
                        >{item}</Li>
                    ))}
                </Ul>
            )}
        </Div>
    )
}

export default SelectElement