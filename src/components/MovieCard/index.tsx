import Image from 'next/image'
import { Plus } from 'phosphor-react'

export function MovieCard() {
  return (
    <div className="w-60 h-80 p-4 bg-zinc-950/40  flex flex-col justify-between rounded-2xl relative overflow-hidden">
      <span className="text-2xl font-bold">Loki</span>

      <div className="flex flex-col items-center gap-2">
        <span className="text-zinc-400 text-sm">Super Hero</span>
        <div className="w-full flex gap-2">
          <button className="bg-zinc-100/20 hover:bg-zinc-100/30 transition-colors p-4 rounded-2xl">
            <Plus size={24} />
          </button>
          <button className="bg-blue-100 w-full transition-colors rounded-2xl hover:bg-blue-200">
            Preview
          </button>
        </div>
      </div>

      <Image
        src="/loki.jpg"
        alt="Loki"
        width={240}
        height={320}
        className="absolute inset-0 object-cover -z-10"
      />
    </div>
  )
}
