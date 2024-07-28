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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const MainPage = () => {
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
  const handleadd = () => {
    console.log("helo");
    // const newdata = {
    //   image: "",
    //   name: "",
    // };
    // row.data.push(newdata);
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
                            <div>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline">+</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                  <DialogHeader></DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="name"
                                        className="text-right"
                                      >
                                        image
                                      </Label>
                                      <Input id="picture" type="file" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label
                                        htmlFor="username"
                                        className="text-right"
                                      >
                                        name
                                      </Label>
                                      <Input
                                        id="username"
                                        className="col-span-3"
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
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
