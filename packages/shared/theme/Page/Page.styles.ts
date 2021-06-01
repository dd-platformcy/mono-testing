import { makeStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH } from '../constants';

export const PageStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    background: theme.palette.background.default
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    position: 'relative',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('sm')]: {
      marginLeft: -DRAWER_WIDTH
    }
  },
  contentShift: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  },
  pageTitle: {
    padding: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px 0`
  },
  pageContent: {
    background: theme.palette.background.default,
    padding: theme.spacing(2)
  }
}));
