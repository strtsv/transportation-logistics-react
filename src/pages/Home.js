import React from "react";

import Header from "../components/Header";
import Content from "../components/Home/Content";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page text-center">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
