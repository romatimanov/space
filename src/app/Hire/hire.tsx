import { useEffect } from "react";
import { useAnimate } from "../hook/animate/useAnimate";
import { Button, TextField, styled } from "@mui/material";

export function Hire() {
  const { animate, containerRef } = useAnimate();

  useEffect(() => {
    animate();
  }, [animate]);

  const CustomTextField = styled(TextField)({
    width: "100%",
    "& .MuiInputBase-root": {
      color: "white",
      borderBottom: "1px solid white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },

    "& .MuiInput-underline:before": {
      borderBottom: "1px solid white",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid white",
    },
  });

  return (
    <div ref={containerRef} className="pt-14">
      <p className="relative text-center font-black text-3xl mb-11 ">
        You was want to do
      </p>
      <div className="flex justify-center mb-10">
        <ul className="flex flex-wrap gap-9 justify-center">
          <li className="px-2 py-3 text-center w-60 border-solid border-white border-2">
            <p className="text-lg">App Design</p>
          </li>
          <li className="px-2 py-3 text-center w-60 border-solid border-white border-2">
            <p className="text-lg">Graphic Design</p>
          </li>
          <li className="px-2 py-3 text-center w-60 border-solid border-white border-2">
            <p className="text-lg">Motion Design</p>
          </li>
          <li className="px-2 py-3 text-center w-60 border-solid border-white border-2 xl:ml-12">
            <p className="text-lg">UX Design</p>
          </li>
          <li className="px-2 py-3 text-center w-60 border-solid border-white border-2 xl:mr-12">
            <p className="text-lg">Webdesign</p>
          </li>
          <li className="px-2 py-3 text-center w-60 border-solid border-white border-2">
            <p className="text-lg">Marketing</p>
          </li>
        </ul>
      </div>
      <form action="#" className="text-center">
        <div className="flex justify-between gap-28 mb-10">
          <CustomTextField
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <CustomTextField
            id="standard-basic"
            label="Email"
            variant="standard"
          />
        </div>
        <Button variant="contained">Send request</Button>
      </form>
    </div>
  );
}
