export default function toHumanDate(date: string): string {
  const dateFormatter = new Intl.DateTimeFormat("da-DK", {
    year: "numeric",
    month: "long",
  });
  return dateFormatter.format(new Date(date));
}
