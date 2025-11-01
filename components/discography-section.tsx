import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Film, Users, Disc } from "lucide-react"

const thomasBangalterProjects = [
  {
    category: "Solo Work",
    icon: Music,
    items: [
      { title: "Trax On Da Rocks", year: "1995", type: "EP", label: "Roulé" },
      { title: "Spinal Scratch", year: "1996", type: "Single", label: "Roulé" },
      { title: "Trax On Da Rocks Vol. 2", year: "1998", type: "EP", label: "Roulé", tracks: ["Club Soda"] },
      { title: "Outrage", year: "2003", type: "Single", label: "Roulé" },
    ],
  },
  {
    category: "Film Soundtracks",
    icon: Film,
    items: [
      { title: "Irréversible", year: "2002", type: "Soundtrack", director: "Gaspar Noé" },
      { title: "Mythologies", year: "2023", type: "Ballet/Soundtrack" },
    ],
  },
]

const guyManuelProjects = [
  {
    category: "Le Knight Club",
    icon: Disc,
    items: [
      { title: "Holiday on Ice / Santa Claus", year: "1997", type: "Single", label: "Crydamoure" },
      { title: "Troobadoor / Mirage", year: "1998", type: "Single", label: "Crydamoure" },
      { title: "Intergalactik Disko", year: "1998", type: "Single", label: "Crydamoure" },
      { title: "Boogie Shell / Coco Girlz / Mosquito / Coral Twist", year: "1999", type: "EP", label: "Crydamoure" },
      { title: "Gator / Chérie D'Amoure", year: "2001", type: "Single", label: "Crydamoure" },
      { title: "Nymphae Song / Rhumba", year: "2002", type: "Single", label: "Crydamoure" },
      { title: "Soul Bells / Palm Beat / Tropicall", year: "2002", type: "EP", label: "Crydamoure" },
      { title: "The Fight", year: "2015", type: "Single", note: "For film Gates of the Sun" },
      { title: "Think Love Not Hate", year: "2015", type: "Single" },
      { title: "Crydamoure Sequence Emotion", year: "2015", type: "Single" },
    ],
  },
]

const collaborativeProjects = [
  {
    category: "Darlin'",
    icon: Users,
    description: "With Laurent Brancowitz (later of Phoenix)",
    items: [
      { title: "Cindy So Loud", year: "1993", type: "Single", label: "Duophonic" },
      { title: "Darlin'", year: "1993", type: "Single", label: "Duophonic" },
      { title: "Untitled 18", year: "1995", type: "Track", label: "Banana Split" },
      { title: "Untitled 33", year: "1995", type: "Track", label: "Banana Split" },
    ],
  },
  {
    category: "Stardust",
    icon: Users,
    description: "Thomas Bangalter with Alan Braxe & Benjamin Diamond",
    items: [
      {
        title: "Music Sounds Better With You",
        year: "1998",
        type: "Single",
        label: "Roulé",
        note: "Iconic house anthem",
      },
    ],
  },
  {
    category: "Together",
    icon: Users,
    description: "Thomas Bangalter & DJ Falcon",
    items: [
      { title: "Together", year: "2000", type: "Single", label: "Roulé" },
      { title: "So Much Love to Give", year: "2002", type: "Single", label: "Roulé" },
      { title: "Call On Me", year: "2003", type: "Unreleased", label: "Roulé" },
    ],
  },
]

const productionCredits = [
  {
    category: "Thomas Bangalter Productions",
    icon: Music,
    items: [
      { artist: "Kanye West", title: "On Sight", album: "Yeezus", year: "2013" },
      { artist: "Kanye West", title: "Black Skinhead", album: "Yeezus", year: "2013" },
      { artist: "N.E.R.D.", title: "Hypnotize U", album: "Nothing", year: "2010" },
      {
        artist: "Arcade Fire",
        title: "Everything Now (Full Album)",
        album: "Everything Now",
        year: "2017",
        note: "Co-produced entire album",
      },
      { artist: "The Weeknd", title: "Starboy", album: "Starboy", year: "2016", note: "With Daft Punk" },
      { artist: "The Weeknd", title: "I Feel It Coming", album: "Starboy", year: "2016", note: "With Daft Punk" },
    ],
  },
  {
    category: "Guy-Manuel Productions",
    icon: Music,
    items: [
      {
        artist: "Sébastien Tellier",
        title: "Sexuality (Full Album)",
        album: "Sexuality",
        year: "2008",
        note: "Produced entire album",
      },
      { artist: "Sébastien Tellier", title: "My Poseidon", year: "2012" },
      { artist: "Kavinsky", title: "Nightcall", album: "OutRun", year: "2010", note: "Featured in Drive" },
      { artist: "Kavinsky", title: "OutRun (Album Production)", album: "OutRun", year: "2013" },
      { artist: "Charlotte Gainsbourg", title: "Rest", album: "Rest", year: "2017", note: "Co-wrote and produced" },
      { artist: "The Weeknd", title: "Hurt You", album: "My Dear Melancholy", year: "2018" },
      { artist: "Cassius", title: "See Me Now", album: "15 Again", year: "2006" },
    ],
  },
]

export function DiscographySection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* Thomas Bangalter Section */}
      <section id="thomas" className="scroll-mt-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary glow-text">Thomas Bangalter</h2>
          <p className="text-muted-foreground text-lg">Solo releases, film soundtracks, and the Roulé label legacy</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {thomasBangalterProjects.map((project) => {
            const Icon = project.icon
            return (
              <Card
                key={project.category}
                className="overflow-hidden border-primary/30 glow-border bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-primary">{project.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.items.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-primary pl-4 py-2">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm md:text-base">{item.title}</h4>
                            {item.tracks && (
                              <p className="text-xs text-muted-foreground mt-1">Tracks: {item.tracks.join(", ")}</p>
                            )}
                            {item.director && (
                              <p className="text-xs text-muted-foreground mt-1">Director: {item.director}</p>
                            )}
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="secondary">{item.year}</Badge>
                            <Badge variant="outline">{item.type}</Badge>
                          </div>
                        </div>
                        {item.label && <p className="text-xs text-muted-foreground mt-2">Label: {item.label}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Guy-Manuel Section */}
      <section id="guy-manuel" className="scroll-mt-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary glow-text">Guy-Manuel de Homem-Christo</h2>
          <p className="text-muted-foreground text-lg">Le Knight Club and the Crydamoure label</p>
        </div>

        <div className="grid gap-8">
          {guyManuelProjects.map((project) => {
            const Icon = project.icon
            return (
              <Card
                key={project.category}
                className="overflow-hidden border-secondary/30 glow-border bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-secondary" />
                    <CardTitle className="text-secondary">{project.category}</CardTitle>
                  </div>
                  <CardDescription>With Eric Chedeville</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.items.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-secondary pl-4 py-2">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm">{item.title}</h4>
                            {item.note && <p className="text-xs text-muted-foreground mt-1">{item.note}</p>}
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="secondary">{item.year}</Badge>
                            <Badge variant="outline">{item.type}</Badge>
                          </div>
                        </div>
                        {item.label && <p className="text-xs text-muted-foreground mt-2">Label: {item.label}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Collaborative Projects */}
      <section id="collaborative" className="scroll-mt-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent glow-text">Collaborative Projects</h2>
          <p className="text-muted-foreground text-lg">Joint ventures and group projects</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {collaborativeProjects.map((project) => {
            const Icon = project.icon
            return (
              <Card
                key={project.category}
                className="overflow-hidden border-accent/30 glow-border bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-accent" />
                    <CardTitle className="text-accent">{project.category}</CardTitle>
                  </div>
                  {project.description && <CardDescription>{project.description}</CardDescription>}
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.items.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-accent pl-4 py-2">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm">{item.title}</h4>
                            {item.note && <p className="text-xs text-muted-foreground mt-1">{item.note}</p>}
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="secondary">{item.year}</Badge>
                            <Badge variant="outline">{item.type}</Badge>
                          </div>
                        </div>
                        {item.label && <p className="text-xs text-muted-foreground mt-2">Label: {item.label}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Production Credits */}
      <section id="productions" className="scroll-mt-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary glow-text">Production Credits</h2>
          <p className="text-muted-foreground text-lg">Work for other artists and major collaborations</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {productionCredits.map((section) => {
            const Icon = section.icon
            return (
              <Card
                key={section.category}
                className="overflow-hidden border-primary/30 glow-border bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-primary">{section.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-primary pl-4 py-2">
                        <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm">{item.artist}</h4>
                            <p className="text-sm text-muted-foreground">{item.title}</p>
                            {item.note && <p className="text-xs text-muted-foreground mt-1 italic">{item.note}</p>}
                          </div>
                          <Badge variant="secondary">{item.year}</Badge>
                        </div>
                        {item.album && <p className="text-xs text-muted-foreground">Album: {item.album}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-muted/50 rounded-lg p-8 md:p-12 border border-primary/20 glow-border">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary glow-text">About This Archive</h3>
          <p className="text-muted-foreground leading-relaxed">
            This comprehensive collection documents the extensive work of Thomas Bangalter and Guy-Manuel de
            Homem-Christo beyond their iconic Daft Punk project. From founding influential labels like Roulé and
            Crydamoure to producing for major artists and creating film soundtracks, their influence on electronic music
            and beyond is immeasurable. This archive spans over 30 years of musical innovation, from their early days in
            Darlin' (1992) to Thomas's recent ballet work Mythologies (2023).
          </p>
        </div>
      </section>
    </div>
  )
}
