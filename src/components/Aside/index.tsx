import {
  House,
  PlusCircle,
  CheckCircle,
  FilmSlate,
  Gear,
  SignOut,
} from 'phosphor-react'

export function Aside() {
  return (
    <aside className="flex flex-col gap-8 min-h-screen w-64 bg-blue-800 pl-8 py-8 ">
      <svg
        width="70"
        height="47"
        viewBox="0 0 70 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5859 26H5.50391V5.5918H0.863281V0.300781H16.1914V5.5918H11.5859V26ZM18.9336 26V0.300781H25.0508V26H18.9336ZM48.6758 26H41.5391L34.8418 10.0215H34.7012C34.7715 10.959 34.8242 11.832 34.8594 12.6406C34.9062 13.4375 34.9355 14.1641 34.9473 14.8203C34.9707 15.4648 34.9824 16.0332 34.9824 16.5254V26H29.3047V0.300781H36.3887L43.0508 15.8398H43.1914C43.1445 14.9727 43.1035 14.1641 43.0684 13.4141C43.0332 12.6641 43.0039 11.9727 42.9805 11.3398C42.957 10.707 42.9453 10.1328 42.9453 9.61719V0.300781H48.6758V26ZM60.3125 9.65234L63.4414 0.300781H69.7344L63.3359 16.1387V26H57.2188V16.3496L50.8027 0.300781H57.166L60.3125 9.65234ZM9.81445 46L7.35352 36.4004H7.27539C7.30794 36.8301 7.33398 37.2467 7.35352 37.6504C7.37956 38.0475 7.39909 38.4251 7.41211 38.7832C7.42513 39.1413 7.43164 39.4798 7.43164 39.7988V46H4.25781V31.7227H8.91602L11.1328 40.2969H11.1914L13.418 31.7227H18.0371V46H14.7754V39.7402C14.7754 39.3822 14.7819 39.0273 14.7949 38.6758C14.8079 38.3177 14.8242 37.9499 14.8438 37.5723C14.8633 37.1947 14.8861 36.804 14.9121 36.4004H14.834L12.334 46H9.81445ZM30.8691 38.8418C30.8691 40.0397 30.752 41.0977 30.5176 42.0156C30.2897 42.9271 29.9447 43.6953 29.4824 44.3203C29.0267 44.9388 28.4603 45.4076 27.7832 45.7266C27.1126 46.0391 26.3346 46.1953 25.4492 46.1953C24.5703 46.1953 23.7923 46.0358 23.1152 45.7168C22.4382 45.3978 21.8685 44.929 21.4062 44.3105C20.944 43.6855 20.5957 42.9141 20.3613 41.9961C20.127 41.0781 20.0098 40.0202 20.0098 38.8223C20.0098 37.2337 20.2148 35.8958 20.625 34.8086C21.0417 33.7214 21.6536 32.8978 22.4609 32.3379C23.2747 31.778 24.2708 31.498 25.4492 31.498C26.6341 31.498 27.627 31.7747 28.4277 32.3281C29.235 32.8815 29.8438 33.7051 30.2539 34.7988C30.6641 35.8861 30.8691 37.2337 30.8691 38.8418ZM23.5449 38.8418C23.5449 39.8118 23.6165 40.6224 23.7598 41.2734C23.903 41.9245 24.1146 42.4128 24.3945 42.7383C24.681 43.0573 25.0326 43.2168 25.4492 43.2168C25.8789 43.2168 26.2305 43.0605 26.5039 42.748C26.7839 42.4355 26.9889 41.957 27.1191 41.3125C27.2559 40.6615 27.3242 39.8379 27.3242 38.8418C27.3242 37.3314 27.168 36.2181 26.8555 35.502C26.5495 34.7793 26.0807 34.418 25.4492 34.418C25.0326 34.418 24.681 34.584 24.3945 34.916C24.1146 35.2415 23.903 35.7331 23.7598 36.3906C23.6165 37.0417 23.5449 37.8587 23.5449 38.8418ZM42.8516 31.7227L39.209 46H35.2539L31.6504 31.7227H35.2148L36.6504 38.7637C36.7155 39.0762 36.7871 39.4603 36.8652 39.916C36.9499 40.3717 37.0247 40.8242 37.0898 41.2734C37.1549 41.7227 37.2005 42.0905 37.2266 42.377C37.2656 42.0905 37.3177 41.7259 37.3828 41.2832C37.4544 40.834 37.5293 40.3848 37.6074 39.9355C37.6921 39.4798 37.7669 39.0957 37.832 38.7832L39.2871 31.7227H42.8516ZM44.043 46V31.7227H47.4414V46H44.043ZM56.6797 46H49.8047V31.7227H56.6797V34.6035H53.2031V37.1816H56.4258V40.0625H53.2031V43.0801H56.6797V46ZM66.4941 46H57.9102V43.6172L62.6855 34.6035H58.0078V31.7227H66.3672V34.0957L61.6113 43.0801H66.4941V46Z"
          fill="#F9F9F9"
        />
      </svg>

      <ul className="flex flex-col gap-3">
        <span className="text-zinc-300">Menu</span>
        <li>
          <a
            className="flex items-center gap-3 hover:text-blue-100 w-full text-blue-100  transition-colors border-r-2 border-blue-100"
            href=""
          >
            <House size={24} /> Home
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-3 hover:text-blue-100  transition-colors"
            href=""
          >
            <PlusCircle size={24} /> Sua lista
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-3 hover:text-blue-100  transition-colors"
            href=""
          >
            <CheckCircle size={24} /> Assistidos
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-3 hover:text-blue-100  transition-colors"
            href=""
          >
            <FilmSlate size={24} /> Cinemas
          </a>
        </li>
      </ul>

      <ul className="flex flex-col gap-3">
        <span className="text-zinc-300 text-lg">Categorias</span>

        <li>
          <a className="flex items-center gap-3" href="">
            Ação
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3" href="">
            Comédia
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3" href="">
            Terror
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3" href="">
            Drama
          </a>
        </li>
      </ul>

      <div className="flex-1 flex">
        <ul className="flex flex-col gap-3 ">
          <span className="text-zinc-300">Geral</span>
          <li>
            <button className="flex items-center gap-3">
              <Gear size={24} /> Configurações
            </button>
          </li>
          <li>
            <button className="flex items-center gap-3">
              <SignOut size={24} /> Sair
            </button>
          </li>
        </ul>
      </div>
    </aside>
  )
}
