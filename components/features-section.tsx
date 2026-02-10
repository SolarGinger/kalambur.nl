import { Layers, Compass, Zap } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Structured Approach",
    description:
      "A well-organized foundation that scales with your needs and keeps everything manageable.",
  },
  {
    icon: Compass,
    title: "Easy Navigation",
    description:
      "Intuitive structure that helps visitors find what they need quickly and efficiently.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Built for speed with modern tooling, ensuring a snappy experience on every device.",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-t border-border bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Built for what matters
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground">
          A few highlights of what this foundation provides out of the box.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start rounded-lg border border-border bg-background p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <feature.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
