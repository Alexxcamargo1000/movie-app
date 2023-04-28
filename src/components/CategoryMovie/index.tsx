import Image from 'next/image'

interface CategoryMovieProps {
  name: string
}
export function CategoryMovie({ name }: CategoryMovieProps) {
  return (
    <div className="flex-shrink-0 relative rounded-xl overflow-hidden">
      <Image
        src="/picture.png"
        width={210}
        height={100}
        alt={`banner do tema sobre o tema  ${name}`}
      />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {name}
      </span>
    </div>
  )
}
