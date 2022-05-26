import React, { useEffect, useContext } from "react";

import GlobalContext from "../../context/GlobalContext";

const headerConfigDefault = {
  theme: "light",
  variant: "primary",
  align: "left",
  isFluid: false,
  button: "cta", // trial, cart, cta, account, null
  buttonText: "Get started free", // trial, cart, cta, account, null
};

const footerConfigDefault = {
  theme: "dark",
  style: "style2", //style1, style2, style3
};

const PageWrapper = ({
  children,
  headerConfig = null,
  footerConfig = null,
}) => {
  const gContext = useContext(GlobalContext);
// eslint-disable-next-line
  useEffect(() => {
    if (gContext.themeDark) {
      gContext.setHeader({
        ...headerConfigDefault,
        ...headerConfig,
        theme: "dark",
      });
      gContext.setFooter({
        ...footerConfigDefault,
        ...footerConfig,
        theme: "dark",
      });
    } else {
      gContext.setHeader({ ...headerConfigDefault, ...headerConfig });
      gContext.setFooter({ ...footerConfigDefault, ...footerConfig });
    }
    // eslint-disable-next-line
  }, [gContext.themeDark, headerConfig, footerConfig]);

  return <>{children}</>;
};

export default PageWrapper;
