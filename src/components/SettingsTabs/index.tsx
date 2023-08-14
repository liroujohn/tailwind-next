'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="my-details"
          title="My details"
          isSelected={currentTab === 'my-details'}
        />
        <TabItem
          value="Profile"
          title="Profile"
          isSelected={currentTab === 'Profile'}
        />
        <TabItem
          value="Password"
          title="Password"
          isSelected={currentTab === 'Password'}
        />
        <TabItem value="Team" title="Team" isSelected={currentTab === 'Team'} />
        <TabItem value="Plan" title="Plan" isSelected={currentTab === 'Plan'} />
        <TabItem
          value="Billing"
          title="Billing"
          isSelected={currentTab === 'Billing'}
        />
        <TabItem
          value="Email"
          title="Email"
          isSelected={currentTab === 'Email'}
        />
        <TabItem
          value="Notifications"
          title="Notifications"
          isSelected={currentTab === 'Notifications'}
        />
        <TabItem
          value="Integrations"
          title="Integrations"
          isSelected={currentTab === 'Integrations'}
        />
        <TabItem value="API" title="API" isSelected={currentTab === 'API'} />
      </Tabs.List>
    </Tabs.Root>
  )
}
