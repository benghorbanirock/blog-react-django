import Header from "../components/Header"
import Hero from "../components/Hero"
import styled from "styled-components"
import PopularPlaces from "../components/PopularPlaces"
import Benefits from "../components/Benefits"
import BestSellingTours from "../components/BestSellingTours"
import DownloadSection from "../components/DownloadSection"
import Comments from "../components/Comments"
import Footer from "../components/Footer"

const Main = styled.main`
  padding: 6rem 1rem 1rem 1rem;
  background-color: var(--background);

  @media only screen and (min-width: 600px) {
    padding: 6rem 2rem 3.5rem 2rem;
  };
  @media only screen and (min-width: 750px) {
    padding: 6rem 3rem 3.5rem 3rem;
  };
  @media only screen and (min-width: 1000px) {
    padding: 6rem 4.5rem 3.5rem 4.5rem;
  };
`;

const Home = () => {
  return (
    <>
      <Header />
      <Main className="container">
        <Hero />
        <PopularPlaces />
        <Benefits />
        <BestSellingTours />
        <DownloadSection />
        <Comments />
      </Main>
      <Footer />
    </>
  )
}

export default Home