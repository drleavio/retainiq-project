import React from "react";
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

const Modal = ({
  show,
  setShow,
  handleadd,
  imgdata,
  setImgdata,
  namedata,
  setNamedata,
  ind,
}) => {
  return (
    <>
      {show ? (
        <Dialog style={{ position: "absolute", top: "0", left: "0" }}>
          <DialogTrigger asChild>
            <Button variant="outline">+</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader></DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  image
                </Label>
                <Input
                  onChange={(e) => {
                    setImgdata(e.target.value);
                  }}
                  id="picture"
                  type="file"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  name
                </Label>
                <Input
                  onChange={(e) => {
                    setNamedata(e.target.value);
                  }}
                  id="username"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={(ind) => {
                  handleadd(ind);
                }}
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
};

export default Modal;
