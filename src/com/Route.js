import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./Navbar";
import Backend from "./pages/dropdown_pages/Backend";
import Digital from "./pages/dropdown_pages/Digital";
import Fronted from "./pages/dropdown_pages/Fronted";
import Full_stack from "./pages/dropdown_pages/Full_stack";
import Flutter from "./pages/dropdown_pages/Flutter";
import Graphics from "./pages/dropdown_pages/Graphics";
import Java from "./pages/dropdown_pages/Java";
import Ui_ux from "./pages/dropdown_pages/Ui_ux";

import Trending_Courses from "./pages/Trending_Courses";
import Advance_digital_marketing from "./pages/dropdown_pages/Advance_digital_marketing";
import Social_Media_Influencer from "./pages/dropdown_pages/Social_Media_Influencer";
import Artificial_Intelligence from "./pages/dropdown_pages/Artificial_Intelligence";
import Machine_Learning from "./pages/dropdown_pages/Machine_Learning";
import Ccc from "./pages/dropdown_pages/Ccc";
import YouTube_Growth_Course from "./pages/dropdown_pages/YouTube_Growth_Course";
import Instagram_Growth_Courses from "./pages/dropdown_pages/Instagram_Growth_Courses";
import Gallery from "./pages/Gallery";
import Company_partner from "./pages/Company_partner";
import React_Native from "./pages/dropdown_pages/React_Native";
import Laravel from "./pages/dropdown_pages/Laravel";
import Php from "./pages/dropdown_pages/Php";
import Angular from "./pages/dropdown_pages/Angular";
import Python from "./pages/dropdown_pages/Python";
import Node from "./pages/dropdown_pages/Node";
import React_js from "./pages/dropdown_pages/React";
import Cyber from "./pages/dropdown_pages/Cyber";
import Animation_2d from "./pages/dropdown_pages/Animation_2d";
import Animation_3d from "./pages/dropdown_pages/Animation_3d";
import Personality from "./pages/dropdown_pages/Personality";
import Animation_master from "./pages/dropdown_pages/Animation_master";

function Router() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}></Route>
          <Route path="courses" element={<Course />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="backend" element={<Backend />}></Route>
          <Route path="digital" element={<Digital />}></Route>
          <Route path="flutter" element={<Flutter />}></Route>
          <Route path="fronted" element={<Fronted />}></Route>
          <Route path="full_stack" element={<Full_stack />}></Route>
          <Route path="graphics" element={<Graphics />}></Route>
          <Route path="java" element={<Java />}></Route>
          <Route path="ui_ux" element={<Ui_ux />}></Route>
          <Route path="trending_courses" element={<Trending_Courses />}></Route>
          <Route
            path="advance_digital"
            element={<Advance_digital_marketing />}
          ></Route>
          <Route
            path="social_media"
            element={<Social_Media_Influencer />}
          ></Route>
          <Route
            path="artificial_intelligence"
            element={<Artificial_Intelligence />}
          ></Route>
          <Route path="machine_learning" element={<Machine_Learning />}></Route>
          <Route path="ccc" element={<Ccc />}></Route>
          <Route
            path="youtube_growth"
            element={<YouTube_Growth_Course />}
          ></Route>
          <Route
            path="instagram_growth"
            element={<Instagram_Growth_Courses />}
          ></Route>
          <Route path="gallery" element={<Gallery />}></Route>

          <Route path="company_partner" element={<Company_partner />}></Route>

          <Route path="react" element={<React_js />}></Route>
          <Route path="react_native" element={<React_Native />}></Route>
          <Route path="node" element={<Node />}></Route>
          <Route path="angular" element={<Angular />}></Route>
          <Route path="python" element={<Python />}></Route>
          <Route path="laravel" element={<Laravel />}></Route>
          <Route path="php" element={<Php />}></Route>
          <Route path="2d_animation" element={<Animation_2d />}></Route>
          <Route path="3d_animation" element={<Animation_3d />}></Route>
          <Route path="animation_master" element={<Animation_master />}></Route>
          <Route path="cyber" element={<Cyber />}></Route>
          <Route path="personality" element={<Personality />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default Router;
