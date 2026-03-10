// useContext
import { useContext } from "react";
import { MyContext } from "../contextProvider";

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};
