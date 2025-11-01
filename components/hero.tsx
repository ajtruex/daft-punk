export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden pyramid-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance glow-text text-primary">
            The Complete Side Projects & Productions
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-pretty">
            A comprehensive archive of all music produced by Thomas Bangalter and Guy-Manuel de Homem-Christo outside of
            their legendary work as Daft Punk. From solo ventures to collaborative masterpieces.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary glow-text">100+</div>
              <div className="text-sm text-muted-foreground">Tracks</div>
            </div>
            <div className="hidden sm:block w-px bg-primary/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary glow-text">30+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="hidden sm:block w-px bg-primary/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent glow-text">Multiple</div>
              <div className="text-sm text-muted-foreground">Genres</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none">
        <div className="absolute inset-0 border-2 border-primary rotate-45 glow-border" />
        <div className="absolute inset-8 border-2 border-secondary rotate-45 glow-border" />
        <div className="absolute inset-16 border-2 border-accent rotate-45 glow-border" />
      </div>
    </section>
  )
}
