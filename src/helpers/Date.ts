export default function getDate(date: Date) {
  return new Date(Date.parse(`${date}`))
    .toLocaleString("ru-RU")
    .replace(",", "");
}