export const formatDateTime = (ctime: number): string => {
  const date = new Date(ctime * 1000);
  const formattedDate = date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return formattedDate;
};
