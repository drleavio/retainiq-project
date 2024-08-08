import React, { useState } from "react";

import img1 from "../../public/images/img1.jpg";
import img2 from "../../public/images/img2.jpg";
import img3 from "../../public/images/img3.jpg";
import img4 from "../../public/images/img4.jpg";
import img5 from "../../public/images/img5.jpg";
import img6 from "../../public/images/img6.jpg";
import { clsx } from "clsx";

const Modal = ({ show, setShow, row, ind, index }) => {
  const images = [
    {
      image: img1.src,
    },
    {
      image: img2.src,
    },
    {
      image: img3.src,
    },
    {
      image: img4.src,
    },
    {
      image: img5.src,
    },
    {
      image: img6.src,
    },
  ];
  return (
    <>
      {show && (
        <div className="modal-container">
          <div className="upper-container">
            <div className="text">Select a new design to link</div>
          </div>
          <div className="images">
            {images.map((val, inde) => {
              return (
                <div
                  className="img-container"
                  key={inde}
                  onClick={() => {
                    console.log(show);

                    setShow(false);
                  }}
                >
                  <img
                    className="inside-img"
                    src={val.image}
                    alt=""
                    onClick={() => {
                      row[ind].data[index].image = val.image;
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
