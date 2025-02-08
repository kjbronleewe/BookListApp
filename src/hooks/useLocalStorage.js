import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value)
      } else {
        localStorage.setItem(key, JSON.stringify(initialValue)); 
        return initialValue
      }
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(initialValue))
      return initialValue
    }
    
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;


// return book ? JSON.parse(book) : initialValue;