import { capitalizeFirstLetter } from "@/helpers/strings";

export const showDate = (dateString: string) => {
  const dateFormatter = new Intl.DateTimeFormat('es', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })
	const date = new Date(dateString)
	const parts = dateFormatter.formatToParts(date);
  const dayPart = parts.find(part => part.type === 'day');
  const monthPart = parts.find(part => part.type === 'month');
  const weekdayPart = parts.find(part => part.type === 'weekday');
  return {
    day: dayPart?.value ?? '',
    weekDay: capitalizeFirstLetter(weekdayPart?.value),
    month: capitalizeFirstLetter(monthPart?.value)
  }
}
