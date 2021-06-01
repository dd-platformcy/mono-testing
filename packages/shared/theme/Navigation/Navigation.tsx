import React, { FunctionComponent, useState } from 'react'
import clsx from 'clsx'
import { isWidthDown } from '@material-ui/core/withWidth'
import { useRouter } from 'next/router'
import {
  Drawer,
  Avatar,
  Typography,
  Box,
  SvgIconProps,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  IconButton
} from '@material-ui/core'

import { NavigationStyles } from './'
import { PageContext } from '../Page'
import MenuIcon from '@material-ui/icons/Menu'
import withWidth from '@material-ui/core/withWidth';
import { WithWidth } from '@material-ui/core/withWidth/withWidth'

interface NavigationProps extends WithWidth {
  legalEntityAvatar?: string
  legalEntityTitle?: string
  navigationItems: NavigationItemProps[]
}

interface NavigationItemProps {
  id: string
  icon: SvgIconProps
  text: string,
  url?: string,
  active?: boolean,
}

 const Navigation: FunctionComponent<NavigationProps> = ({
   legalEntityAvatar,
   legalEntityTitle,
   navigationItems,
   width
 }: NavigationProps) => {
  const classes = NavigationStyles()

   const router = useRouter()

   const { isNavigationOpen, setIsNavigationOpen } = React.useContext(PageContext)

  const handleMNavigationButtonClick = () => {
    setIsNavigationOpen(!isNavigationOpen)
  }

  const activeNavigationItem = navigationItems?.find(navigationItem => navigationItem.active)

  const [activeItem, setActiveItem] = useState(activeNavigationItem?.id)

  const handleNavigationItemClick = (navigationItem: NavigationItemProps) => {
    setActiveItem(navigationItem.id)

    if(isWidthDown('xs', width))
    {
      setIsNavigationOpen(false)
    }

    if(navigationItem.url)
    {
      router.push(navigationItem.url).then()
    }
  }

  const navigationListItem = (item: NavigationItemProps, index: number) => (
    <ListItem
      key={index}
      button
      className={clsx(classes.navigationItem, item.id === activeItem && 'active')}
      onClick={() => handleNavigationItemClick(item)}
    >
      <ListItemIcon className={classes.navigationItemIcon}>
        {item.icon}
      </ListItemIcon>
      <ListItemText
        disableTypography={true}
        primary={item.text}
        className={classes.navigationItemText}
      />
    </ListItem>
  )

  const navigationItemList = () => (
    <List
      component="nav"
      className={classes.navigationItemsList}
    >
      {navigationItems.map((navigationItem, navigationItemIndex) => (
        navigationListItem(navigationItem, navigationItemIndex)
      ))}
    </List>
  )

  const drawer = () => (
    <div>
      <div className={classes.drawerHeader}>
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

      <div className={classes.drawerContent}>
        <Box className={classes.avatarBox}>
          {(legalEntityAvatar != null) &&
          <Avatar alt={`${legalEntityTitle} Avatar`} src={legalEntityAvatar} className={classes.avatar} />
          }
        </Box>

        {(legalEntityTitle != null) &&
        <Typography className={classes.title}>
          {legalEntityTitle}
        </Typography>
        }

        {(navigationItems != null) && (navigationItems.length > 0) && navigationItemList()}
      </div>
    </div>
  )

  return (
    <nav className={classes.drawer} aria-label="navigation items">
      <Hidden smUp >
        <Drawer
          variant="temporary"
          anchor="left"
          open={isNavigationOpen}
          onClose={handleMNavigationButtonClick}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer()}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          variant="persistent"
          anchor="left"
          open={isNavigationOpen}
          onClose={handleMNavigationButtonClick}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {drawer()}
        </Drawer>
      </Hidden>
    </nav>
  )
}
export default withWidth()(Navigation);
