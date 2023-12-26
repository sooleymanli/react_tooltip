import { Typography } from '@mui/material';
import './_style.scss'
import React from 'react';
import { styled } from '@mui/material/styles';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'black',
      color: '#fff',
      width: 500,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

export default function CompanyLogo({company}) {

  return (
    <HtmlTooltip
    title={
      <React.Fragment>
        <Typography color="inherit">Tooltip with HTML</Typography>
        <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
        {"It's very engaging. Right?"}
      </React.Fragment>
    }
  >
    <div className='company-logo'>
        
{company}
    </div>
    </HtmlTooltip>

  )
}
