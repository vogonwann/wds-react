import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    var item = localStorage.getItem(key);
    return item === null
      ? typeof initialValue === "function"
        ? initialValue()
        : initialValue
      : JSON.parse(item);
  });

  useEffect(() => {
    !value
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
