"use client";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import img1 from "../../public/images/img1.jpg";
import img2 from "../../public/images/img2.jpg";
import img3 from "../../public/images/img3.jpg";
import img4 from "../../public/images/img4.jpg";
import img5 from "../../public/images/img5.jpg";
import img6 from "../../public/images/img6.jpg";
import threedots from "../../public/images/threedots.svg";
import deletebutton from "../../public/images/deletebutton.svg";
import ninedots from "../../public/images/ninedots.jpg";
import plusicon from "../../public/images/plusicon.svg";
import Modal from "./Modal";

const MainPage = () => {
  const [show, setShow] = useState(true);
  const [imgdata, setImgdata] = useState("");
  const [namedata, setNamedata] = useState("");
  const [row, setRow] = useState([
    {
      id: 1,
      data: [
        {
          image: img1.src,
          name: "Anniversary Sale",
        },
        {
          image: img2.src,
          name: "2 image-zero disco...",
        },
        {
          image: img3.src,
          name: "Multi image-fallback",
        },
      ],
    },
    {
      id: 2,
      data: [
        {
          image: img4.src,
          name: "Anniversary Sale",
        },
        {
          image: img5.src,
          name: "2 image-zero disco...",
        },
        {
          image: img6.src,
          name: "Multi image-fallback",
        },
      ],
    },
  ]);
  const deleteclick = (index) => {
    const updatedrows = [...row];
    updatedrows.splice(index, 1);
    console.log(index);
    setRow(updatedrows);
  };
  const handleclick = () => {
    const newRow = {
      data: [
        {
          iamge: "",
          name: "rahul",
        },
        {
          iamge: "",
          name: "rahul",
        },
        {
          iamge: "",
          name: "rahul",
        },
      ],
    };
    setRow([...row, newRow]);
  };
  const handleadd = (ind) => {
    row[0].data.push({
      image: imgdata,
      name: namedata,
    });
  };
  const handledragend = (result) => {
    if (!result.destination) return;
    let tempuser = [...row];
    let [selectedrow] = tempuser.splice(result.source.index, 1);
    tempuser.splice(result.destination.index, 0, selectedrow);
    setRow(tempuser);
  };
  return (
    <div className="lower-container">
      <div className="lc-content">
        <DragDropContext
          onDragEnd={(result) => {
            handledragend(result);
          }}
        >
          <table style={{ position: "relative" }}>
            <thead>
              <tr>
                <th></th>
                <th className="th">
                  <div className="table-text-main">Product Filter</div>
                </th>
                <th className="th">
                  {" "}
                  <div className="table-head">
                    <div className="table-text">Primary Variant</div>
                    <div className="dot-img">
                      <img className="dots" src={threedots.src} alt="" />
                    </div>
                  </div>
                </th>
                <th className="th">
                  {" "}
                  <div className="table-head">
                    <div className="table-text">Variant 2</div>
                    <div className="dot-img">
                      <img className="dots" src={threedots.src} alt="" />
                    </div>
                  </div>
                </th>
                <th className="th">
                  {" "}
                  <div className="table-head">
                    <div className="table-text">Variant 3</div>
                    <div className="dot-img">
                      <img className="dots" src={threedots.src} alt="" />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <Droppable droppableId="tbody">
              {(provided) => (
                <tbody ref={provided.innerRef} {...provided.droppableProps}>
                  {row.map((opt, ind) => {
                    return (
                      <Draggable
                        draggableId={ind.toString()}
                        index={ind}
                        key={ind.toString()}
                      >
                        {(provided) => (
                          <tr
                            key={ind}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <td className="td" key={ind}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  onClick={(ind) => {
                                    deleteclick(ind);
                                  }}
                                  className="delete-btn"
                                >
                                  <img src={deletebutton.src} alt="" />
                                </div>
                                <div className="counter">
                                  <div className="first-counter">{ind + 1}</div>
                                  <div className="cntr-img">
                                    <img
                                      className="inside-cntr-img"
                                      src={ninedots.src}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="td" key={ind}>
                              <div className="first-row">
                                <div className="inside-fr">
                                  Product Collection
                                </div>
                                <div className="inside-fr green">contains</div>
                                <div className="inside-fr">Anarkali suits</div>
                              </div>
                            </td>

                            {opt.data.map((val, index) => {
                              return (
                                <td className="td" key={index}>
                                  <div className="table-cell" key={ind}>
                                    <div className="tc-img">
                                      <img
                                        className="inside-tc-img"
                                        src={val.image}
                                        alt=""
                                      />
                                    </div>
                                    <div className="tc-text">{val.name}</div>
                                  </div>
                                </td>
                              );
                            })}
                            <td>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <Modal
                                  show={show}
                                  setShow={setShow}
                                  handleadd={handleadd}
                                  imgdata={imgdata}
                                  setImgdata={setImgdata}
                                  namedata={namedata}
                                  setNamedata={setNamedata}
                                  ind={ind}
                                />
                              </div>
                            </td>
                          </tr>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </tbody>
              )}
            </Droppable>
            <div onClick={handleclick}>
              <div className="onshow">
                <img className="inside-onshow" src={plusicon.src} alt="" />
              </div>
            </div>
          </table>
        </DragDropContext>
      </div>
    </div>
  );
};

export default MainPage;
