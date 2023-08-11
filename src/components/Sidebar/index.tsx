import {
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
  LifeBuoy,
  Cog,
  ChevronDown,
  Search,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} iconTwo={ChevronDown} />
        <NavItem title="Dashboard" icon={BarChart} iconTwo={ChevronDown} />
        <NavItem title="Projects" icon={SquareStack} iconTwo={ChevronDown} />
        <NavItem title="Tasks" icon={CheckSquare} iconTwo={ChevronDown} />
        <NavItem title="Reporting" icon={Flag} iconTwo={ChevronDown} />
        <NavItem title="Users" icon={Users} iconTwo={ChevronDown} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} iconTwo={'_'} />
          <NavItem title="Settings" icon={Cog} iconTwo={'_'} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
