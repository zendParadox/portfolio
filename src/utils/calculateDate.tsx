export function calculateDate(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const diffTime = end.getTime() - start.getTime();
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  const formattedYears = Math.max(diffYears, 0.1).toFixed(1);
  if (!endDate) {
    return `Present (${formattedYears} Years)`;
  }
  return `${endDate} (${formattedYears} Years)`;
}
