import { useMemo } from "react";

export const useFilteredProperties = (data, filters) => {
  const filtered = useMemo(() => {
    return data.filter((property) => {
      const locationMatch =
        !filters.location ||
        property.location.toLowerCase().includes(filters.location.toLowerCase());

      const typeMatch =
        !filters.type ||
        property.type.toLowerCase().includes(filters.type.toLowerCase());

      const min = filters.minPrice ? parseInt(filters.minPrice) : 0;
      const max = filters.maxPrice ? parseInt(filters.maxPrice) : Infinity;
      const priceMatch = property.price >= min && property.price <= max;

      return locationMatch && typeMatch && priceMatch;
    });
  }, [data, filters]);

  return filtered;
};
