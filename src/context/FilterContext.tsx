"use client";

import React, { createContext, useContext, useState } from "react";

interface FilterContextType {
  city: string;
  setCity: (v: string) => void;
  type: string;
  setType: (v: string) => void;
  budget: string;
  setBudget: (v: string) => void;
  isFiltering: boolean;
  setIsFiltering: (v: boolean) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);

  return (
    <FilterContext.Provider value={{ city, setCity, type, setType, budget, setBudget, isFiltering, setIsFiltering }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
