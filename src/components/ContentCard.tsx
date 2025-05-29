
import React from 'react';

type Category = 'VIEW ALL' | 'BRIDAL' | 'FASHION' | 'FOOD & DRINK' | 'BEAUTY' | 'SERVICES';

interface ContentItem {
  id: string;
  title: string;
  business: string;
  category: Category;
  image: string;
}

interface ContentCardProps {
  item: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
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
        <div className="absolute top-4 left-0 bg-orange-500 text-white px-3 py-1 text-sm font-medium">
          {item.business}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4 line-clamp-2">
          {item.title}
        </h3>
        <button className="border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
          ENTER
        </button>
      </div>
    </div>
  );
};

export default ContentCard;
