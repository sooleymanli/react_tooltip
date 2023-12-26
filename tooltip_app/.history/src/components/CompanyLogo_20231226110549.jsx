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
    },
  }));

export default function CompanyLogo({company,}) {

  return (
    <HtmlTooltip
    title={
      <React.Fragment>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea, quia saepe id esse distinctio quis eius dolore natus? Fugiat deserunt, placeat perferendis exercitationem voluptates amet voluptatibus accusantium aut perspiciatis, maxime optio, itaque voluptatem possimus nesciunt dicta. Vel deleniti voluptates, quidem a sint nobis! Facere, omnis modi voluptatibus deserunt totam corporis? Quam autem maxime temporibus assumenda, optio praesentium eum voluptatem incidunt ex fugit vero aliquam soluta est alias. Fugiat harum aspernatur numquam iure esse amet. Quia harum veritatis quod odio dolore accusantium consequuntur quo possimus! Necessitatibus dolore quis, laborum aliquam dolor dicta! Aperiam ipsum magni delectus velit suscipit dolore ut!
      </React.Fragment>
    }
  >
    <div className='company-logo'>
        
        {company}
    </div>
    </HtmlTooltip>

  )
}
