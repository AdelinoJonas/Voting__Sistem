import React, { useState } from "react";

export const UserContext = React.createContext({});

export const ContextProvider = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <UserContext.Provider value={{ openModal, setOpenModal }}>
      {props.children}
    </UserContext.Provider>
  );
};
