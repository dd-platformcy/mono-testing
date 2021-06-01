import React from 'react'
import {
    Box,
    Typography }
    from '@material-ui/core'

import { TypographyStyles } from './'

export default {
  title: 'Typography'
}

export const Default = () => {
    const classes = TypographyStyles()

    return (
      <>
          <Box className={classes.box}>
              <Typography variant="h1">Typography - h1 - Lato, Bold, 36px, #333333</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography variant="h2">Typography - h2 - Lato, Bold, 24px, #333333 </Typography>
          </Box>
          <Box className={classes.box}>
            <Typography variant="h3">Typography - h3 - Lato, Bold, 20px, #333333</Typography>
          </Box>
          <Box className={classes.box}>
              <Typography variant="h4">Typography - h4 - Lato, Bold, 16px, #333333</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography variant="h5">Typography - h5 - Lato, Bold, 15px, #333333</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography variant="h6">Typography - h6 - Lato, Bold, 14px, #333333</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography variant="subtitle1">Typography - subtitle1 - Lato, Regular, 12px, #333333</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography variant="subtitle2">Typography - subtitle2 - Lato, Medium, 12px, #8590A0</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography>Typography - body1 - Lato, Regular, 14px, #333333</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography variant="body2">Typography - body2 - Lato, Medium, 14px, #8590A0</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography variant="caption">Typography - caption - Lato, Bold, 16px, #C4CAD3</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography variant="button">Typography - button - Lato, Regular, 15px, #333333</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography variant="overline">Typography - overline - Lato, Regular, 14px, #333333</Typography>
          </Box>
          <Box className={classes.box}>
            <Typography variant="srOnly">Typography - srOnly - Lato, Regular, 14px, #333333</Typography>
          </Box>
      </>
    )
}
