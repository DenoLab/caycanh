import React, { createContext, useContext, useState } from 'react'
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMobileLayout, setActiveMobileLayout] = useState(false);
  const [activeMobileNavbar, setActiveMobileNavbar] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  // const setMode = (e) => {
  //   setCurrentMode(e.target.value)
  //   localStorage.setItem('themeMode', e.target.value)
  //   setThemeSettings(false)
  // }


  return (
    <StateContext.Provider value={{ activeMobileLayout, setActiveMobileLayout, screenSize, setScreenSize, activeMobileNavbar, setActiveMobileNavbar }} >
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext);