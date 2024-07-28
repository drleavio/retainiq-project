"use client";
import React, { useState } from "react";
import logo from "../../public/images/logo.jpg";
import flash from "../../public/images/flash.jpg";
import meta from "../../public/images/meta.jpg";
import scene from "../../public/images/scene.jpg";
import setting from "../../public/images/setting.jpg";
import shirt from "../../public/images/shirt.jpg";
import wallet from "../../public/images/wallet.jpg";
import Link from "next/link";
import cross from "../../public/images/cross.svg";
import hamburger from "../../public/images/hamburger.svg";
import clsx from "clsx";

const SideLayout = () => {
  const logoimg = [
    {
      image: flash.src,
      path: "",
    },
    {
      image: scene.src,
      path: "",
    },
    {
      image: meta.src,
      path: "",
    },
    {
      image: shirt.src,
      path: "",
    },
  ];
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="small-container">
        {show ? (
          <div
            onClick={() => {
              setShow(!show);
            }}
          >
            <img src={cross.src} alt="" />
          </div>
        ) : (
          <div
            onClick={() => {
              setShow(!show);
            }}
          >
            <img src={hamburger.src} alt="" />
          </div>
        )}
      </div>
      <div
        className={clsx("side-container", {
          "show-side-container": !show,
        })}
      >
        <div className="upper-container">
          <div className="logo-img">
            <img className="inside-logo-img" src={logo.src} alt="" />
          </div>
        </div>
        <div className="middle-container">
          <div className="main-icon-img-box">
            {logoimg.map((opt, ind) => {
              return (
                <Link href={opt.path} key={ind}>
                  <div className="icon-img">
                    <img className="inside-icon-img" src={opt.image} alt="" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="lower-container-side">
          <div className="icon-img">
            <img className="inside-icon-img" src={wallet.src} alt="" />
          </div>
          <div className="icon-img">
            <img className="inside-icon-img" src={setting.src} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideLayout;
