import React, { FC, ReactNode, createContext, useState } from "react";

interface MyContextType {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <MyContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </MyContext.Provider>
  );
};
