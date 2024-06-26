import { useEffect, useState } from "react";

export function useRestaurantMenu(id) {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=${id}`;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(URL);
        const data = await response.json();
        setMenuData(data?.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    }

    fetchData();
  }, [URL]);

  return { menuData, loading, error };
}
