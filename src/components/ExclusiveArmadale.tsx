
import React, { useState } from 'react';
import CategoryNavigation from './CategoryNavigation';
import ContentCard from './ContentCard';

type Category = 'VIEW ALL' | 'BRIDAL' | 'FASHION' | 'FOOD & DRINK' | 'BEAUTY' | 'SERVICES';

interface ContentItem {
  id: string;
  title: string;
  business: string;
  category: Category;
  image: string;
}

const ExclusiveArmadale: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('VIEW ALL');

  const categories: Category[] = ['VIEW ALL', 'BRIDAL', 'FASHION', 'FOOD & DRINK', 'BEAUTY', 'SERVICES'];

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Free aperitif with reservations for two in April',
      business: 'VICTOR CHURCHILL',
      category: 'FOOD & DRINK',
      image: '/lovable-uploads/eb6425b4-d1e2-4c44-8db6-8cbc9364c4eb.png'
    },
    {
      id: '2',
      title: 'Attend our AW25 Collection Preview and Win a Trip to Paris!',
      business: 'SCANLAN THEODORE',
      category: 'FASHION',
      image: '/lovable-uploads/eb6425b4-d1e2-4c44-8db6-8cbc9364c4eb.png'
    },
    {
      id: '3',
      title: '12 IPL Limelight Full Face Treatments for the price of 9!',
      business: 'SKIN ANGEL',
      category: 'BEAUTY',
      image: '/lovable-uploads/eb6425b4-d1e2-4c44-8db6-8cbc9364c4eb.png'
    }
  ];

  const filteredContent = selectedCategory === 'VIEW ALL' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-gray-900">
            EXCLUSIVE ARMADALE
          </h2>
          <button className="text-sm font-medium tracking-wider hover:underline text-gray-900">
            VIEW ALL
          </button>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <CategoryNavigation 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveArmadale;
