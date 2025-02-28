import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = useMemo(() => {
    return !searchParams.get("last") ? 7 : Number(searchParams.get("last"));
  }, [searchParams]);

  const queryDate = useMemo(() => {
    return subDays(new Date(), numDays).toISOString();
  }, [numDays]);

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { isLoading, bookings };
}
