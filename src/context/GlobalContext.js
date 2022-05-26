import React, { useState } from "react"

const GlobalContext = React.createContext()

const GlobalProvider = ({ children }) => {
  const [themeDark, setThemeDark] = useState(false)
  const [videoModalVisible, setVideoModalVisible] = useState(false)
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false)
  const [header, setHeader] = useState({
    theme: "light",
    variant: "primary",
    align: "left",
    isFluid: false,
    button: "cta", // cta, account, null
    buttonText: "Get started free", // cta, account, null
  })
  const [footer, setFooter] = useState({
    theme: "dark",
    style: "style1", //style1, style2
  })

  const toggleTheme = () => {
    setThemeDark(!themeDark)
  }

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible)
  }

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas)
  }

  const closeOffCanvas = () => {
    setVisibleOffCanvas(false)
  }
  // console.log(GlobalHeaderContext);
  return (
    <GlobalContext.Provider
      value={{
        themeDark,
        toggleTheme,
        videoModalVisible,
        toggleVideoModal,
        visibleOffCanvas,
        toggleOffCanvas,
        closeOffCanvas,
        header,
        setHeader,
        footer,
        setFooter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
export { GlobalProvider }
