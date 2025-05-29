
import React from 'react';

type Category = 'VIEW ALL' | 'BRIDAL' | 'FASHION' | 'FOOD & DRINK' | 'BEAUTY' | 'SERVICES';

interface CategoryNavigationProps {
  categories: Category[];
  selectedCategory: Category;
  onCategorySelect: (category: Category) => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  return (
    <div className="flex flex-wrap gap-1">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`px-6 py-3 text-sm font-medium tracking-wider transition-colors ${
            selectedCategory === category
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryNavigation;
