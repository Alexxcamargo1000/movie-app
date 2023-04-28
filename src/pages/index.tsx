import { Aside } from '@/components/Aside'
import { CategoryMovie } from '@/components/CategoryMovie'
import { MovieCard } from '@/components/MovieCard'
import Image from 'next/image'
import { CaretDown, MagnifyingGlass } from 'phosphor-react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  return (
    <div className="flex min-h-screen h-full font-lato overflow-auto">
      <Aside />

      <main className="flex-1  p-16">
        <header className=" flex items-center gap-16">
          <span className="text-2xl font-semibold">Movies</span>

          <div className="w-full flex gap-2 items-center bg-blue-800 py-3 px-4 rounded focus-within:outline focus-within:outline-blue-100">
            <MagnifyingGlass size={20} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Busque pelo seu filme"
              className="bg-transparent focus:outline-0 w-full	"
            />
          </div>
        </header>

        <div className="mt-16">
          <div className=" max-w-[770px] min-h-[364px] bg-slate-500 rounded-lg overflow-hidden"></div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-extrabold">Popular</h2>
          <div className="">
            <MovieCard />
          </div>
        </div>
      </main>

      <div className="w-64 min-h-screen bg-blue-800 py-12 flex items-center flex-col  ">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            Erick <CaretDown size={20} />
          </span>
          <Image
            width={56}
            height={56}
            alt="Avatar user"
            className="w-14 h-14 rounded-2xl"
            src="https://github.com/erick-araujo-dev.png"
          />
        </div>

        <h3 className="mt-8 text-3xl mb-6">Categorias</h3>

        <div className="flex flex-col gap-5 scrollStyle overflow-y-scroll px-2">
          <CategoryMovie name="drama" />
          <CategoryMovie name="Ação" />
          <CategoryMovie name="drama" />
          <CategoryMovie name="drama" />
          <CategoryMovie name="drama" />
          <CategoryMovie name="drama" />
        </div>
      </div>
    </div>
  )
}
