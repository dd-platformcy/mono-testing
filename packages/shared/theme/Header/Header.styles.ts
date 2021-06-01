import { makeStyles } from '@material-ui/core/styles'

import { APP_BAR_HEIGHT, DRAWER_WIDTH } from '../constants'

export const HeaderStyles = makeStyles(theme => ({
  appBar: {
    height: APP_BAR_HEIGHT,
    background: theme.palette.background.default,
    boxShadow: 'none'
  },
  toolbar: {
    height: '100%',
    position: 'relative'
  },
  navigationContainer: {
    width: 'auto',
    maxWidth: 'auto'
  },
  navigationContainerShift: {
    width: DRAWER_WIDTH,
    maxWidth: DRAWER_WIDTH,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      maxWidth: 'auto'
    }
  },
  navigationButton: {
    marginRight: theme.spacing(2),
    color: '#000000'
  },
  mainContainer: {
    width: '100%',
    display: 'flex'
  }
  /*
  searchContainer: {
    position: 'relative',
    display: 'flex',
    width: 'auto',
    marginRight: theme.spacing(2)
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000'
  },
  inputRoot: {
    color: '#A7A7A7'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  avatarContainer: {
    position: 'absolute',
    right: 0
  },
  avatar: {
    background: theme.palette.common.lightGrey,
    color: '#999999',
    marginRight: theme.spacing(2)
  } */
}))
