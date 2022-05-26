import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from "react"

import styled, { ThemeProvider } from "styled-components"
import AOS from "aos"

import Header from "../Header"
import Footer from "../Footer"

import GlobalContext from "../../context/GlobalContext"

import GlobalStyle from "../../utils/globalStyle"

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/aos/dist/aos.css"

import "../../assets/fonts/typo.css"

import "../../scss/bootstrap.scss"
import "../../scss/main.scss"

import { get, merge } from "lodash"

// the full theme object
import { theme as baseTheme } from "../../utils"

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`

// options for different color modes
const modes = { light: "light", dark: "dark" }

// merge the color mode with the base theme
// to create a new theme object
const getTheme = mode =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  })

const Layout = ({ children, pageContext }) => {
  // eslint-disable-next-line
  const gContext = useContext(GlobalContext)

  const [visibleLoader, setVisibleLoader] = useState(true)

  useLayoutEffect(() => {
    AOS.init({ once: true })
    setVisibleLoader(false)
  }, [])

  // Navbar style based on scroll
  const eleRef = useRef()

  useEffect(() => {
    window.addEventListener(
      "popstate",
      function (event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas()
      },
      false
    )
    window.addEventListener(
      "pushState",
      function (event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas()
      },
      false
    )
  }, [gContext])

  return (
    <>
      <ThemeProvider theme={getTheme(modes.dark)}>
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            <Header isDark={gContext.headerDark} />
            {children}

            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
