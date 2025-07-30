import React from 'react';

const destinations = [
  {
    title: 'Manhattan',
    tours: 30,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    offset: 'translate-y-0',
  },
  {
    title: 'Pearland',
    tours: 40,
    image:
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80',
    offset: 'translate-y-0',
  },
  {
    title: 'New York',
    tours: 25,
    image:
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80',
    offset: 'translate-y-0',
  },
];

const Destinations = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
          <div className='text-left'>
            <p className="text-emerald-600 font-medium mb-2 font-MeowScript text-3xl">Popular Destination</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Featured Destination
            </h2>
          </div>
         </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {destinations.map((item, idx) => (
            <div
              key={idx}
              className={`relative w-full md:w-1/3 h-[400px] rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 transform ${item.offset}`}
            >
              <div className="absolute inset-0 z-10 bg-black/10 bg-opacity-60" />

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                <p className="text-md text-white">Travel To</p>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <span className="inline-block bg-emerald-500 text-white text-xs font-medium mt-2 px-3 py-1 rounded-full">
                  {item.tours} Tours
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
