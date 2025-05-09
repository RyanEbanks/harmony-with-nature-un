
interface ContentSectionProps {
  title: string
  imageSrc: string
  imageAlt: string
  content: string
  imagePosition: "left" | "right"
}

export default function ContentSection({
  title,
  imageSrc,
  imageAlt,
  content,
  imagePosition,
}: ContentSectionProps) {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className={`grid gap-8 md:grid-cols-2 ${imagePosition === "right" ? "md:grid-flow-dense" : ""}`}>
          <div
            className={`flex flex-col justify-center space-y-4 ${imagePosition === "right" ? "md:col-start-1" : ""}`}
          >
            <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl">
              {title}
              <div className="mt-2 h-1 w-24 bg-green-600" />
            </h2>
            <p className="text-lg text-stone-700">{content}</p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}