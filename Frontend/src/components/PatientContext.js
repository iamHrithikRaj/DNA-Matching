import React, { useState, createContext } from "react";

export const PatientContext = createContext();

export const PatientProvider = (props) => {
  // eslint-disable-next-line
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$23",
      id: 1,
    },
    {
      name: "Game of Thones",
      price: "$54",
      id: 2,
    },
    {
      name: "Iron Man",
      price: "$93",
      id: 3,
    },
    {
      name: "Black Panther",
      price: "$13",
      id: 4,
    },
  ]);
  return (
    <PatientContext.Provider value={[movies, setMovies]}>
      {props.children}
    </PatientContext.Provider>
  );
};
