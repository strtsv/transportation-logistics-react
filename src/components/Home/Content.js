import React from "react";
import GreatSelection from "./GreatSelection";
import Trucking from "./Trucking";
import Years from "./Years";
import Partners from "./Partners";
import Blog from "./Blog";
import Contact from "./Contact";

class Content extends React.Component {
  render() {
    return (
      <main>
        <GreatSelection></GreatSelection>
        <Trucking></Trucking>
        <Years></Years>
        <Partners></Partners>
        <Blog></Blog>
        <Contact></Contact>
      </main>
    );
  }
}

export default Content;
