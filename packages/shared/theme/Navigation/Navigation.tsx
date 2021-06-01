import React, { FunctionComponent, useState } from 'react'
import clsx from 'clsx'
import {
  Drawer,
  Avatar,
  Typography,
  Box,
  SvgIconProps,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import { NavigationStyles } from './'
import { PageContext } from '../Page'

interface NavigationProps {
  avatar?: string
  title?: string
  navigationItems: NavigationItemProps[]
}

interface NavigationItemProps {
  id: string
  icon: SvgIconProps
  text: string
  active?: boolean
}

export const Navigation: FunctionComponent<NavigationProps> = ({
  avatar,
  title,
  navigationItems
}: NavigationProps) => {
  const classes = NavigationStyles()

  const { isNavigationOpen, setIsNavigationOpen } = React.useContext(PageContext)

  const handleMNavigationButtonClick = () => {
    setIsNavigationOpen(!isNavigationOpen)
  }

  const activeNavigationItem = navigationItems?.find(navigationItem => navigationItem.active)

  const [activeItem, setActiveItem] = useState(activeNavigationItem?.id)

  const handleMNavigationItemClick = (navigationItemId: string) => {
    setActiveItem(navigationItemId)
  }

  const navigationListItem = (item: NavigationItemProps, index: number) => (
    <ListItem
      key={index}
      button
      className={clsx(classes.navigationItem, item.id === activeItem && 'active')}
      onClick={() => handleMNavigationItemClick(item.id)}
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
      <Box className={classes.avatarBox}>
        {(avatar != null) &&
          <Avatar alt={`${avatar} Avatar`} src={avatar} className={classes.avatar} />
        }
      </Box>

      {(title != null) &&
        <Typography className={classes.title}>
          {title}
        </Typography>
      }

      {(navigationItems != null) && (navigationItems.length > 0) && navigationItemList()}
    </div>
  )

  return (
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
  )
}
