import UpFromApi from "@/monitoring/api/logs/[slug]/upFrom/_interface";
import useSWR from "swr";

const INTERVAL = 3_000;

const useUpFrom = (slug: string) => {
    return useSWR(
        `/monitoring/api/logs/${slug}/upFrom`,
        (url) =>
            fetch(url, { next: { revalidate: INTERVAL } })
                .then((response) => response.json())
                .then((data: UpFromApi.Get.Response) => {
                    if (data) return new Date(data);
                    return null;
                }),
        { refreshInterval: INTERVAL, refreshWhenOffline: true }
    );
};

export default useUpFrom;
