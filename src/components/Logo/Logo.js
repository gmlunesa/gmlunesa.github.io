import React from "react"
import { Link } from "gatsby"

import imgLogo from "../../assets/images/gmlunesa-logo.svg"

const Logo = ({ height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`d-block ${className}`} {...rest}>
      <img src={imgLogo} alt="gmlunesa" />
    </Link>
  )
}

export default Logo
