import React from "react";
import "./style.css";
import Hero from "./Hero";
import About from "./About";
import Siege from "./Siege";
import Character from "./Character";
import Roadmap from "./Roadmap";
import Faq from "./Faq";
import Team from "./Team";
import Built from "./Built";
import Features from "./Features";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
const Home = () => {
  return (
    <>
    <Header/>
      <Hero />
      <About />
      <Siege />
      <Character />
      <Features />
      <Built />
      <Roadmap />
      <Team />
      <Faq />
      <Footer/>
    </>
  );
};

export default Home;
