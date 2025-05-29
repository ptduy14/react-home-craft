
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
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`px-4 py-2 text-sm font-medium border transition-colors ${
            selectedCategory === category
              ? 'bg-gray-900 text-white border-gray-900'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryNavigation;
