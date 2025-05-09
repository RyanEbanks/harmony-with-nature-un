import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

interface TeamMemberProps {
  name: string
  role: string
  imageSrc: string
  bio: string
}

export default function TeamMember({ name, role, imageSrc, bio }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-sm">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 bg-white">
          <CardHeader className="pb-2">
            <CardTitle>{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{bio}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}