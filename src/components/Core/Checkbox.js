import React from "react"
import { uniqueId } from "lodash"
import styled from "styled-components"
import {
  space,
  border,
  typography,
  shadow,
  flexbox,
  layout,
} from "styled-system"

const CheckStyled = styled.label`
  display: inline-flex;
  cursor: pointer;

  ${border};
  ${space};
  ${typography};
  ${shadow};
  ${flexbox};
  ${layout};
`

const Check = styled.span`
  position: relative;
  line-height: 1;
  top: -2px;
  margin-right: 8px;
  min-height: 20px;
  min-width: 20px;
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 0;
`

const Checkbox = ({
  children = "Keep me signed in",
  onClick = () => {},
  ...rest
}) => {
  const uID = uniqueId("check_")

  return (
    <CheckStyled {...rest} htmlFor={uID}>
      <input className="d-none" type="checkbox" id={uID} />
      <Check className="check"></Check>
      <Text>{children}</Text>
    </CheckStyled>
  )
}

export default Checkbox
