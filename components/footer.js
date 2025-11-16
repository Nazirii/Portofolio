export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 relative z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition">UX/UX Design</a></li>
              <li><a href="#" className="hover:text-foreground transition">Web Dev</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">About</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition">My History</a></li>
              <li><a href="#" className="hover:text-foreground transition">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Information</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition">Sitemap</a></li>
              <li><a href="#" className="hover:text-foreground transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Got It Touch</h4>
            <p className="text-muted-foreground text-sm">
              Stay connected with me and lets know more about my service and more
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Adib Naziri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
