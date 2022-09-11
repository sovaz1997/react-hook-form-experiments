import { useEffect, useState } from 'react';
import { getDrinks } from '../data/drinks';

export const useDrinks = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getDrinks().then((res) => setDrinks(res));
  }, []);

  return { data: drinks, loading: !drinks };
};
