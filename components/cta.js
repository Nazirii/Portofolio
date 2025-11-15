export default function CTA() {
  return (
    <section className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let&apos;s Hire Me And Make<br />The Best Product
            </h2>
            
            <p className="text-gray-400 leading-relaxed">
              Contact me if you are interested in estimating your work by me, or you can check out my youtube channel to see how i work, thanks
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition font-semibold">
                🎬 YouTube
              </button>
              <button className="px-6 py-3 bg-yellow-400 text-[#1a1a2e] rounded-lg hover:bg-yellow-300 transition font-semibold">
                📧 Contact Me
              </button>
            </div>
          </div>

          <div className="relative h-96">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nqEWfmqzURAiD5i63kl8fZeSnbOoTF.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
