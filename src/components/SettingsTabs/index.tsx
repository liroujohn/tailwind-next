'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
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
            <TabItem
              value="Team"
              title="Team"
              isSelected={currentTab === 'Team'}
            />
            <TabItem
              value="Plan"
              title="Plan"
              isSelected={currentTab === 'Plan'}
            />
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
            <TabItem
              value="API"
              title="API"
              isSelected={currentTab === 'API'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
