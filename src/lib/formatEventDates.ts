export type DateLike = string | Date;

function toDate(d: DateLike): Date | null {
  if (d instanceof Date) return isNaN(d.getTime()) ? null : d;
  const parsed = new Date(d);
  return isNaN(parsed.getTime()) ? null : parsed;
}

function sameCalendarDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function monthNamePt(d: Date) {
  return d.toLocaleString("pt-BR", { month: "long" }).toUpperCase();
}

function fmtDate(d: Date) {
  return `${d.getDate()} ${monthNamePt(d)} ${d.getFullYear()}`;
}

function hourLabel(d: Date) {
  return `${d.getHours()}H`;
}

/**
 * Format an array or single LocalDateTime-like value into the display string required by the design.
 * Behavior:
 * - single datetime -> "DD MONTH YYYY - HHH" (example: "31 MAIO 2026 - 19H")
 * - multiple datetimes -> if first and last are same calendar day -> "DD MONTH YYYY - H1H ÀS H2H"
 *                         otherwise -> "DD MONTH YYYY - DD MONTH YYYY"
 */
export function formatEventDates(input: DateLike | DateLike[]): string | null {
  const list = Array.isArray(input) ? input : [input];
  const dates: Date[] = list.map(toDate).filter(Boolean) as Date[];
  if (dates.length === 0) return null;
  dates.sort((a, b) => a.getTime() - b.getTime());
  const start = dates[0];
  const end = dates[dates.length - 1];

  if (dates.length === 1) {
    return `${fmtDate(start)} - ${hourLabel(start)}`;
  }

  if (sameCalendarDay(start, end)) {
    const startH = hourLabel(start);
    const endH = hourLabel(end);
    return `${fmtDate(start)} - ${startH} ÀS ${endH}`;
  }

  return `${fmtDate(start)} - ${fmtDate(end)}`;
}

export default formatEventDates;
