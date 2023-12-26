import "./_style.scss";
import React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from 'prop-types';

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

// Tooltipin dizaynlarini buradan vere bilersen..
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    placement="bottom"
    arrow
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "black",
    color: "#fff",
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(12),
    borderColor: "red",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "black",
  },
}));

export default function CompanyLogo({ company, tooltipText }) {
  return (
    <HtmlTooltip title={<React.Fragment>{tooltipText}</React.Fragment>}>
      <div className="company-logo">{company}</div>
    </HtmlTooltip>
  );
}


CompanyLogo.propTypes = {
    company: PropTypes.string.isRequired, // company prop'unun bir string olduğunu ve zorunlu olduğunu belirtiyoruz
    tooltipText: PropTypes.node.isRequired, // tooltipText prop'unun bir React düğümü olduğunu ve zorunlu olduğunu belirtiyoruz
  };