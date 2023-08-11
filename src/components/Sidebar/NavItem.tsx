import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
  iconTwo: ElementType | string
}

export function NavItem({ title, icon: Icon, iconTwo: IconTwo }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <IconTwo className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </a>
  )
}
