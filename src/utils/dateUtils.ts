const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/**
 * Returns something like:
 * "Aug 2022 - Nov 2023 (1 year 6 months)"
 * or if endDate is null:
 * "Jun 2025 - Present (1 year 1 month)"
 */
export function formatExperienceDate(
  startDate: Date,
  endDate: Date | null = null
): string {
  const end = endDate ?? new Date();

  const startLabel = `${MONTHS[startDate.getMonth()]} ${startDate.getFullYear()}`;
  const endLabel = endDate
    ? `${MONTHS[end.getMonth()]} ${end.getFullYear()}`
    : 'Present';

  const duration = getDuration(startDate, end);

  return `${startLabel} - ${endLabel} (${duration})`;
}

function getDuration(start: Date, end: Date): string {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Count the current month if the day has been reached
  if (end.getDate() >= start.getDate()) {
    months += 1;
    if (months === 12) {
      years += 1;
      months = 0;
    }
  }

  const yearLabel = years === 1 ? 'year' : 'years';
  const monthLabel = months === 1 ? 'month' : 'months';

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${yearLabel}`);
  if (months > 0) parts.push(`${months} ${monthLabel}`);

  return parts.length > 0 ? parts.join(' ') : 'less than 1 month';
}
