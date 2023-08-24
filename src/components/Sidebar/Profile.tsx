import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/liroujohn.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-700">
          João Gabriel
        </span>
        <span className="text-sm text-zinc-700">jgomachado@hotmail.com</span>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
