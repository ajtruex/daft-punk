export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            This is an unofficial fan-made archive documenting the side projects and production work of Thomas Bangalter
            and Guy-Manuel de Homem-Christo.
          </p>
          <p className="text-xs text-muted-foreground">
            All music rights belong to their respective owners and labels. This site is for informational purposes only.
          </p>
          <div className="pt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Beyond Daft Punk Archive
          </div>
        </div>
      </div>
    </footer>
  )
}
