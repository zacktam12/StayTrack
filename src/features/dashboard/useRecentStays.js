import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = useMemo(() => {
    return !searchParams.get("last") ? 7 : Number(searchParams.get("last"));
  }, [searchParams]);

  const queryDate = useMemo(() => {
    return subDays(new Date(), numDays).toISOString();
  }, [numDays]);

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  });

  const confirmedStays = useMemo(() => {
    return stays?.filter(
      (stay) => stay.status === "checked-in" || stay.status === "checked-out"
    );
  }, [stays]);

  return { isLoading, stays, confirmedStays, numDays };
}
