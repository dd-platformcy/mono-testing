import React, { FunctionComponent } from 'react'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import {
  IconButton,
  AppBar,
  Toolbar
} from '@material-ui/core'

import { HeaderStyles } from './'
import { PageContext } from '../Page'

interface HeaderProps {
  avatar?: string
}

export const Header: FunctionComponent<HeaderProps> = () => {
  const classes = HeaderStyles()

  const { isNavigationOpen, setIsNavigationOpen } = React.useContext(PageContext)

  const handleMNavigationButtonClick = () => {
    setIsNavigationOpen(!isNavigationOpen)
  }

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar)}
    >
      <Toolbar className={classes.toolbar}>
        <div className={clsx(classes.navigationContainer, {
          [classes.navigationContainerShift]: isNavigationOpen
        })}>
          <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={handleMNavigationButtonClick}
            edge="start"
            className={classes.navigationButton}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className={classes.mainContainer}>
          {/* <div className={classes.searchContainer}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div className={classes.avatarContainer}>
            <Avatar className={classes.avatar} src={avatar} />
          </div> */}
        </div>
      </Toolbar>
    </AppBar>
  )
}
