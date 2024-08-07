import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img1 from "../../public/images/img1.jpg";
import img2 from "../../public/images/img2.jpg";
import img3 from "../../public/images/img3.jpg";
import img4 from "../../public/images/img4.jpg";
import img5 from "../../public/images/img5.jpg";
import img6 from "../../public/images/img6.jpg";

const Dialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        +
      </button>
      {open ? (
        <div className="dialog">
          <div className="inside-dialog">hello my name is rahul</div>
        </div>
      ) : null}
    </>
  );
};

export default Dialog;
