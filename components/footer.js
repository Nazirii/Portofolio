export default function Footer() {
  return (
    <footer className="bg-[#0f0f1e] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">UX/UX Design</a></li>
              <li><a href="#" className="hover:text-white transition">Web Dev</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">My History</a></li>
              <li><a href="#" className="hover:text-white transition">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Sitemap</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Got It Touch</h4>
            <p className="text-gray-400 text-sm">
              Stay connected with me and lets know more about my service and more
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 James Adams. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
