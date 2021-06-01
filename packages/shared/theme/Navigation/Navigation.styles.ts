import { makeStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH, APP_BAR_HEIGHT } from '../constants';

export const NavigationStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    height: '100%',
    padding: `0 ${theme.spacing(3)}px 0 ${theme.spacing(3)}px`,
    border: 'none'
  },
  drawerHeader: {
    height: APP_BAR_HEIGHT,
    display: 'flex',
    alignItems: 'center'
  },
  drawerContent: {},
  navigationButton: {
    marginRight: theme.spacing(2),
    color: '#000000'
  },
  avatarBox: {
    background: `${theme.palette.background.default} 0% 0% no-repeat padding-box`,
    width: '100%',
    height: '80px',
    margin: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px 0`,
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
    margin: theme.spacing(2)
  },
  navigationItemsList: {
    marginBottom: theme.spacing(2)
  },
  navigationItem: {
    marginBottom: theme.spacing(1),
    borderRadius: '15px',
    font: 'normal normal normal 14px/17px Lato',
    letterSpacing: '0px',
    '&.active': {
      background: `${theme.palette.background.default} 0% 0% no-repeat padding-box`
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
}));
