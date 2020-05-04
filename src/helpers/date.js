export const dateFormat = dateString => {
  if (!dateString) {
    return '';
  }

  const currentDate = new Date();
  const date = new Date(dateString);
  const month = date.toLocaleString('default', {
    month: 'short',
  });

  if (currentDate.getFullYear() < date.getFullYear()) {
    return month + ' ' + date.getDate() + ', ' + date.getFullYear();
  }

  return month + ' ' + date.getDate();
};
