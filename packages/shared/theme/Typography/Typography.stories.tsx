import React from 'react'
import Typography from '@material-ui/core/Typography'

export default {
  title: 'Typography'
}

export const Default = () => (
  <>
    <Typography paragraph variant="h1">Typography - h1 - Lato, Bold, 36px, #333333</Typography>
    <Typography paragraph variant="h2">Typography - h2 - Lato, Bold, 24px, #333333 </Typography>
    <Typography paragraph variant="h3">Typography - h3 - Lato, Bold, 20px, #333333</Typography>
    <Typography paragraph variant="h4">Typography - h4 - Lato, Bold, 16px, #333333</Typography>
    <Typography paragraph variant="h5">Typography - h5 - Lato, Bold, 15px, #333333</Typography>
    <Typography paragraph variant="h6">Typography - h6 - Lato, Bold, 14px, #333333</Typography>
    <Typography paragraph variant="subtitle1">Typography - subtitle1 - Lato, Regular, 12px, #333333</Typography>
    <Typography paragraph variant="subtitle2">Typography - subtitle2 - Lato, Medium, 12px, #8590A0</Typography>
    <Typography paragraph>Typography - body1 - Lato, Regular, 14px, #333333</Typography>
    <Typography paragraph variant="body2">Typography - body2 - Lato, Medium, 14px, #8590A0</Typography>
    <Typography paragraph variant="caption">Typography - caption - Lato, Bold, 16px, #C4CAD3</Typography>
    <Typography paragraph variant="button">Typography - button - Lato, Regular, 15px, #333333</Typography>
    <Typography paragraph variant="overline">Typography - overline - Lato, Regular, 14px, #333333</Typography>
    <Typography paragraph variant="srOnly">Typography - srOnly - Lato, Regular, 14px, #333333</Typography>
  </>
)
