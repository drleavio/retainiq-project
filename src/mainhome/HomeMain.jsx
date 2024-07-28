"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import MainPage from "@/components/MainPage";

const HomeMain = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="home-main-route">
      <Header />
      <MainPage />
    </div>
  );
};

export default HomeMain;
