export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')        // Заменяем пробелы на -
    .replace(/[^\w\-]+/g, '')    // Убираем все не-слова
    .replace(/\-\-+/g, '-')      // Заменяем множественные - на одинарные
    .replace(/^-+/, '')          // Убираем начальные -
    .replace(/-+$/, '');         // Убираем конечные -
};
