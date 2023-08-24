import React from "react";
import Home from "../Home/Home";
import Services from "../Services/Services";

import Shop from "../Shop/Shop";
import Blog from "../Blog/Blog";
import Contacts from "../Contacts/Contacts";
import OtherPost from "../Blog/OtherPost";
import Footer from "../Footer/Footer";

export default function Sections() {
  return (
    <div>
      <section id="section1">
        <Home />
      </section>
      <section id="section2">
        <Services />
      </section>
      <section id="section3">
        <Shop></Shop>
      </section>
      <section id="section4">
        <Blog></Blog>
      </section>
      <section id="section5">
        <Contacts></Contacts>
      </section>
      <section>
        <OtherPost></OtherPost>
      </section>
      <section>
        <Footer></Footer>
      </section>
      
    </div>
  );
}
