
import React from 'react';

interface NewsItem {
  id: string;
  title: string;
  business: string;
  image: string;
}

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="bg-white overflow-hidden group cursor-pointer">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Business Label */}
        <div className="absolute top-4 left-0 bg-green-500 text-white px-3 py-1 text-sm font-medium">
          {item.business}
        </div>
      </div>
      
      {/* Content */}
      <div className="py-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6 line-clamp-2">
          {item.title}
        </h3>
        <button className="border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
