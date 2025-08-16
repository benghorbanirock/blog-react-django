import styled from 'styled-components'
import notFound from './../assets/icons/notFound.svg'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Div = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);
    font: 1.25rem 'dana';

    @media only screen and (min-width: 768px) {
        font-size: 2rem;
    }
`;
const Img = styled.img`
    max-width: 320px;

    @media only screen and (min-width: 768px) {
        max-width: 420px;
    }
`;

const NotFound = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 5000);

    return (
        <>
            <Header />
            <Div>
                <Img src={notFound} alt="not found" />
                <h3>صفحه مورد نظر شما یافت نشد!</h3>
            </Div>
            <Footer />
        </>
    )
}

export default NotFound