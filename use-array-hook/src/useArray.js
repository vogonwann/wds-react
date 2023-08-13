import { useState, useCallback } from "react";

export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);

  const set = useCallback((newArray) => {
    setArray(newArray);
  }, []);

  const push = useCallback((newItem) => {
    setArray((array) => [...array, newItem]);
  }, []);

  const replace = useCallback((index, newItem) => {
    setArray((array) => [
      ...array.slice(0, index),
      newItem,
      ...array.slice(index + 1, array.length),
    ]);
  }, []);

  const filter = useCallback((callback) => {
    setArray((array) => array.filter(callback));
  }, []);

  const remove = useCallback((index) => {
    setArray((array) => [
      ...array.slice(0, index),
      ...array.slice(index + 1, array.length),
    ]);
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  const reset = useCallback(() => {
    setArray(initialValue);
  }, [initialValue]);

  return {
    array,
    set,
    push,
    replace,
    filter,
    remove,
    clear,
    reset,
  };
}
