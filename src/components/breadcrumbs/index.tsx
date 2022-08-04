import React from 'react'
import { Breadcrumbs, Link } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const index = () => {
  const list = ['Discover', 'Recently Played']

  return (
    <div>
      <Breadcrumbs separator={<ChevronRightIcon fontSize="small" />}
        aria-label="breadcrumb">
        {list.map((item, index) => <Link underline="hover" key={index + 1} color="inherit">{item}</Link>)}
      </Breadcrumbs>
    </div>
  )
}

export default index