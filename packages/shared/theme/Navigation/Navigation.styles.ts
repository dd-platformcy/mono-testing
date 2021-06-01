import { makeStyles } from '@material-ui/core/styles'

import { DRAWER_WIDTH, APP_BAR_HEIGHT } from '../constants'

export const NavigationStyles = makeStyles(theme => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    height: '100%',
    padding: `0px ${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    position: 'fixed',
    top: APP_BAR_HEIGHT,
    border: 'none'
  },
  avatarBox: {
    background: `${theme.palette.background.secondary} 0% 0% no-repeat padding-box`,
    width: '100%',
    height: '80px',
    marginBottom: theme.spacing(1.5),
    borderRadius: '20px'
  },
  avatar: {
    width: '100%',
    height: '100%'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    font: 'normal normal bold 14px/17px Lato',
    letterSpacing: '0px',
    marginBottom: theme.spacing(1.5)
  },
  navigationItemsList: {
    marginBottom: theme.spacing(1.5)
  },
  navigationItem: {
    marginBottom: theme.spacing(1),
    borderRadius: '15px',
    font: 'normal normal normal 14px/17px Lato',
    letterSpacing: '0px',
    '&.active': {
      background: `${theme.palette.background.secondary} 0% 0% no-repeat padding-box`
    }
  },
  navigationItemIcon: {
    color: theme.palette.text.primary
  },
  navigationItemText: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    font: 'normal normal 900 14px/17px Lato'
  }
}))
