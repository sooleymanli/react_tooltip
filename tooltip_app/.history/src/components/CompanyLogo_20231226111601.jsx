import './_style.scss'
import React from 'react';
import { styled } from '@mui/material/styles';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} placement="bottom" arrow />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'black',
      color: '#fff',
      maxWidth: 500,
      fontSize: theme.typography.pxToRem(12),
      borderColor:"red"
    },
  }));

export default function CompanyLogo({company,tooltipText}) {

  return (
    <HtmlTooltip
    title={
      <React.Fragment>
        {tooltipText}
      </React.Fragment>
    }
  >
    <div className='company-logo'>
        
        {company}
    </div>
    </HtmlTooltip>

  )
}
