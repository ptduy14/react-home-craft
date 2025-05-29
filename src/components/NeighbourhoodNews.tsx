
import React from 'react';
import NewsCard from './NewsCard';

interface NewsItem {
  id: string;
  title: string;
  business: string;
  image: string;
}

const NeighbourhoodNews: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Pixel Boss launch their new software SWIFT!',
      business: 'PIXEL BOSS',
      image: '/lovable-uploads/eb6425b4-d1e2-4c44-8db6-8cbc9364c4eb.png'
    },
    {
      id: '2',
      title: 'AW25 designs now in store!',
      business: 'LUCI DI BELLA',
      image: '/lovable-uploads/eb6425b4-d1e2-4c44-8db6-8cbc9364c4eb.png'
    },
    {
      id: '3',
      title: 'Armadale Cellars top wine picks for 2025!',
      business: 'ARMADALE CELLARS',
      image: '/lovable-uploads/eb6425b4-d1e2-4c44-8db6-8cbc9364c4eb.png'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-gray-900">
            NEIGHBOURHOOD NEWS
          </h2>
          <button className="text-sm font-medium tracking-wider hover:underline text-gray-900">
            VIEW ALL
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighbourhoodNews;
