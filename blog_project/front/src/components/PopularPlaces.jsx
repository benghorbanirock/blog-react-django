import styled from 'styled-components'
import tower from './../assets/icons/tower.svg'
import CardProduct from './CardProduct'
import { IoIosArrowDown } from "react-icons/io"
import toursData from '../data/toursData';


const Container = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 1rem;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
`;
const H2 = styled.h2`
    color: var(--text);
    font: 1rem 'dana';
    display: flex;
    align-items: center;
    column-gap: .25rem;

    img {
        width: 25px;
    }
`;
const Button = styled.button`
    background-color: var(--secondary);
    color: var(--text);
    border-radius: 2rem;
    font-size: 1rem;
    padding: .25rem .75rem;
`;
const LoadButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--secondary-button);
    color: var(--text);
    display: grid;
    place-content: center;
    margin: .5rem auto;
`;

const PopularPlaces = () => {
    const sortedData = toursData.sort((a, b) => b.score - a.score).slice(0, 3);
    
    return (
        <Container>
            <Wrapper>
                <H2>
                    محبوب ترین مکان ها
                    <img src={tower} alt="tower" />
                </H2>
                <Button>دیدن همه</Button>
            </Wrapper>
            <CardProduct data={sortedData} />
            <LoadButton>
                <IoIosArrowDown />
            </LoadButton>
        </Container>
    )
}

export default PopularPlaces