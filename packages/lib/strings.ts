export const formatCategoryName = (categoryName: string) => {
  // Replace "_and_" with " & ", split the category name by underscores,
  // capitalize each word, and join them back with spaces
  return categoryName
    .replace(/_and_/g, " & ")
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const generateInitials = (name: string) => {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

export const capitalizeFirstLetters = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
