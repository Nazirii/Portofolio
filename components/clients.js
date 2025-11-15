export default function Clients() {
  const clients = [
    { name: 'TED', logo: '/icon/ted.svg' },
    { name: 'UGM', logo: '/icon/UGM.png' },
    { name: 'Kementrian LH', logo: '/icon/kemenlh.png' },
    { name: 'RDK', logo: '/icon/rdk.png' },
  ]

  return (
    <section className="relative -mt-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#40404D] rounded-lg p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center justify-center gap-3">
                <img 
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain"
                />
                <span className="text-xl font-bold text-white">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
