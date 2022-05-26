import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { Link } from "gatsby"
import { GoPlusSmall, GoKebabVertical } from "react-icons/go"

import GlobalContext from "../../context/GlobalContext"
import Offcanvas from "../Offcanvas"
import NestedMenu from "../NestedMenu"
import { device } from "../../utils"
import Logo from "../Logo"
import { menuItems } from "../../data/menuItems"

const SiteHeader = styled.header`
  padding: 10px 0 10px 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  @media ${device.lg} {
    position: fixed !important;
    transition: 0.6s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.6s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: ${({ theme }) => theme.colors.heading};
    }
  }
`

const ToggleButton = styled.button`
  color: ${({ theme }) => theme.colors.lightShade}!important;
  border-color: ${({ theme }) => theme.colors.lightShade}!important;
`

const Header = () => {
  const gContext = useContext(GlobalContext)
  const [showScrolling, setShowScrolling] = useState(false)
  const [showReveal, setShowReveal] = useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true)
    } else {
      setShowScrolling(false)
    }
    if (currPos.y < -300) {
      setShowReveal(true)
    } else {
      setShowReveal(false)
    }
  })
  return (
    <>
      <SiteHeader
        className={`site-header  site-header--absolute py-0 sticky-header site-header--menu-right dark-mode-texts 
        ${showScrolling ? "scrolling" : ""} 
        
        ${
          showReveal
            ? "reveal-header bg-red"
            : showReveal
            ? "reveal-header"
            : ""
        }
        `}
      >
        <Container
          fluid={gContext.header.isFluid}
          className={gContext.header.isFluid ? "pe-lg-9 ps-lg-9" : ""}
        >
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg px-0">
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo">
              <Logo />
            </div>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav-wrapper">
                <ul className="navbar-nav main-menu d-none d-lg-flex">
                  {menuItems.map(
                    (
                      { label, isExternal = false, name, items, ...rest },
                      index
                    ) => {
                      const hasSubItems = Array.isArray(items)
                      return (
                        <React.Fragment key={name + index}>
                          {hasSubItems ? (
                            <li className="nav-item dropdown" {...rest}>
                              <a
                                className="nav-link dropdown-toggle gr-toggle-arrow"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                href="/#"
                                onClick={e => e.preventDefault()}
                              >
                                {label}
                                <GoPlusSmall />
                              </a>
                              <ul className="gr-menu-dropdown dropdown-menu">
                                {items.map((subItem, indexSub) => {
                                  const hasInnerSubItems = Array.isArray(
                                    subItem.items
                                  )
                                  return (
                                    <React.Fragment
                                      key={subItem.name + indexSub}
                                    >
                                      {hasInnerSubItems ? (
                                        <li className="drop-menu-item dropdown">
                                          <a
                                            className="dropdown-toggle gr-toggle-arrow"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            href="/#"
                                            onClick={e => e.preventDefault()}
                                          >
                                            {subItem.label}
                                            <GoPlusSmall />
                                          </a>
                                          <ul className="gr-menu-dropdown dropdown-menu dropdown-right">
                                            {subItem.items.map(
                                              (itemInner, indexInnerMost) => (
                                                <li
                                                  className="drop-menu-item"
                                                  key={
                                                    itemInner.name +
                                                    indexInnerMost
                                                  }
                                                >
                                                  {itemInner.isExternal ? (
                                                    <a
                                                      href={`${itemInner.name}`}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                    >
                                                      {itemInner.label}
                                                    </a>
                                                  ) : (
                                                    <Link
                                                      to={`/${itemInner.name}`}
                                                    >
                                                      {itemInner.label}
                                                    </Link>
                                                  )}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </li>
                                      ) : (
                                        <li className="drop-menu-item">
                                          {subItem.isExternal ? (
                                            <a
                                              href={`${subItem.name}`}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              {subItem.label}
                                            </a>
                                          ) : (
                                            <Link to={`/${subItem.name}`}>
                                              {subItem.label}
                                            </Link>
                                          )}
                                        </li>
                                      )}
                                    </React.Fragment>
                                  )
                                })}
                              </ul>
                            </li>
                          ) : (
                            <li className="nav-item" {...rest}>
                              {isExternal ? (
                                <a
                                  className="nav-link"
                                  href={`${name}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {label}
                                </a>
                              ) : (
                                <Link
                                  className="nav-link"
                                  to={`/${name}`}
                                  role="button"
                                  aria-expanded="false"
                                >
                                  {label}
                                </Link>
                              )}
                            </li>
                          )}
                        </React.Fragment>
                      )
                    }
                  )}
                </ul>
              </div>
            </div>

            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ms-3 ${
                gContext.visibleOffCanvas ? "collapsed" : ""
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
            >
              <GoKebabVertical />
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu menuItems={menuItems} />
      </Offcanvas>
    </>
  )
}
export default Header
