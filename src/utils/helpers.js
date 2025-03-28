import { formatDistance } from "date-fns/formatDistance";
import { parseISO } from "date-fns/parseISO";
import { differenceInDays } from "date-fns/differenceInDays";

// Helper function to parse Date objects and strings correctly
const parseDate = (date) => (date instanceof Date ? date : parseISO(date));

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseDate(dateStr1), parseDate(dateStr2));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseDate(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

// Supabase needs an ISO date string. This removes time variations
export const getToday = function (options = {}) {
  const today = new Date();
  if (options?.end) today.setUTCHours(23, 59, 59, 999); // End of the day
  else today.setUTCHours(0, 0, 0, 0); // Start of the day
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
