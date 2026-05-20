import { useState, useMemo } from "react";
import { categories, searchEmojis } from "../data/emojis";

export const useEmoji = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredEmojis = useMemo(() => {
    if (searchQuery) {
      return searchEmojis(searchQuery);
    }
    
    if (selectedCategory) {
      const category = categories.find(c => c.id === selectedCategory);
      return category?.emojis || [];
    }
    
    return categories.flatMap(c => c.emojis);
  }, [searchQuery, selectedCategory]);

  const selectedCategoryData = useMemo(() => {
    return selectedCategory ? categories.find(c => c.id === selectedCategory) : undefined;
  }, [selectedCategory]);

  return {
    categories,
    filteredEmojis,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedCategoryData,
  };
};
