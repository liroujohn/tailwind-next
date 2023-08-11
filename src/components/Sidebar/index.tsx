import {
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
  Search,
  LifeBuoy,
  Cog,
  ChevronDown,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>

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
      </div>
    </aside>
  )
}
