import { useEffect, useState, useCallback } from "react"; 
//Использование useCallback для мемоизации функции getValue для предотвращения её создания заново при каждом рендере, если ключ не изменился.

export const useLocalStorage = (initialValue, key) => {
  const getValue = useCallback(() => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initialValue;
  }, [key]); // Зависящая от key функция для получения значения

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]); // Добавляем key как зависимость

  return [value, setValue];
};
