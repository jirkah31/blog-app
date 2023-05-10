const getFullDateFromISO = (dateISO: string) => {
  const date = new Date(dateISO)
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return {day, month, year}
}

export default getFullDateFromISO
