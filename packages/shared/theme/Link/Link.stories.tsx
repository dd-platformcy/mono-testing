import React from 'react'
import Link from '@material-ui/core/Link'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Link'
}

export const Default = () => (
  <Link onClick={action('Default link clicked')}>
    Default
  </Link>
)
