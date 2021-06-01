import React, { FunctionComponent, useState } from 'react'
import clsx from 'clsx'
import DashboardIcon from '@material-ui/icons/Dashboard'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore'
import StorefrontIcon from '@material-ui/icons/Storefront'
import GavelIcon from '@material-ui/icons/Gavel'
import ReceiptIcon from '@material-ui/icons/Receipt'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import DescriptionIcon from '@material-ui/icons/Description'
import HelpIcon from '@material-ui/icons/Help'

import { PageStyles } from './'
import { Header } from '../Header'
import { Navigation } from '../Navigation'

const navigationItems = [
  {
    id: 'dashboard-navigation-item',
    icon: <DashboardIcon />,
    text: 'Dashboard',
    active: true
  },
  {
    id: 'marketplace-navigation-item',
    icon: <LocalGroceryStoreIcon />,
    text: 'Marketplace'
  },
  {
    id: 'store-navigation-item',
    icon: <StorefrontIcon />,
    text: 'Store'
  },
  {
    id: 'tenders-navigation-item',
    icon: <GavelIcon />,
    text: 'Tenders'
  },
  {
    id: 'orders-and-payments-navigation-item',
    icon: <ReceiptIcon />,
    text: 'Orders & Payments'
  },
  {
    id: 'partners-navigation-item',
    icon: <EmojiPeopleIcon />,
    text: 'Partners'
  },
  {
    id: 'documents-navigation-item',
    icon: <DescriptionIcon />,
    text: 'Documents'
  },
  {
    id: 'support-center-navigation-item',
    icon: <HelpIcon />,
    text: 'Support Center'
  }
]

interface PageProps {
  avatar?: string
  title?: string
  children?: any
}

export const PageContext = React.createContext({
  isNavigationOpen: false,
  setIsNavigationOpen: (_isOpen: boolean) => {}
})

export const Page: FunctionComponent<PageProps> = ({
  avatar,
  title,
  children
}: PageProps) => {
  const classes = PageStyles()

  const [isNavigationOpen, setIsNavigationOpen] = useState(true)

  const providerValue = { isNavigationOpen, setIsNavigationOpen }

  return (
    <PageContext.Provider value={providerValue}>
      <div className={classes.root}>
        <Header />

        <Navigation
          avatar={avatar}
          title={title}
          navigationItems={navigationItems}
        />

        <div className={clsx(classes.content, {
          [classes.contentShift]: isNavigationOpen
        })}>
          <div className={classes.navigationHeader} />

          {children}
        </div>
      </div>
    </PageContext.Provider>
  )
}
