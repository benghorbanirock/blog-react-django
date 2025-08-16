import planeTwo from './../assets/icons/planeTwo.svg'
import dollar from './../assets/icons/dollar.svg'
import clock from './../assets/icons/clock.svg'
import questionMark from './../assets/icons/questionMark.svg'
import styled from 'styled-components'
import world from './../assets/images/world.png'

const benefitsList = [
    {
        image: planeTwo,
        name: 'رزرو آنلاین',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'
    },
    {
        image: dollar,
        name: 'ضمانت بهترین قیمت',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'
    },
    {
        image: clock,
        name: 'پشتیبانی 24 ساعته',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'
    }
];

const BenefitSection = styled.div`
    color: var(--text);
    font-family: 'iransans';
    display: grid;
    
    @media only screen and (min-width: 1000px) {
        background: url(${world}) 0px -10px / cover no-repeat;
        padding-bottom: 1.75rem;
    }
`;
const H3 = styled.h3`
    display: flex;
    align-items: center;
    column-gap: .25rem;
    padding-bottom: 1rem;

    span {
        border-bottom: 2px solid var(--primary);
    }
`;
const Ul = styled.ul`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
    text-align: center;
    background-color: var(--card-container);
    border-radius: 2rem;
    border: 1.5px solid var(--border-container);

    @media only screen and (min-width: 900px) {
        flex-direction: row;
        gap: 1.25rem;
        margin-top: 1rem;
        padding: 1.5rem;
    }
`;
const Li = styled.li`
    background-color: var(--card-background);
    padding: .75rem;
    border-radius: 1.5rem;
    color: white;
    position: relative;
    z-index: 10;

    &::before {
        content: '';
        position: absolute;
        width: 60px;
        height: 60px;
        top: 1.35rem;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 1.75rem;
        background-color: var(--card-background);
        z-index: -10;
    }
    img {
        background-color: var(--icon-background);
        width: 40px;
        height: 40px;
        padding: .25rem;
        border-radius: 50%;
    }
    h4 {
        padding: 1rem 0;
    }
    p {
        font-weight: 300;
        font-size: .9rem;
    }
`;

const Benefits = () => {
    return (
        <BenefitSection>
            <H3>
                <span>چرا</span> سفر کن
                <img src={questionMark} alt="question mark" />
            </H3>
            <Ul>
                {benefitsList.map((item, index) => (
                    <Li key={index}>
                        <img src={item.image} alt={item.name} />
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                    </Li>
                ))}
            </Ul>
        </BenefitSection>
    )
}

export default Benefits