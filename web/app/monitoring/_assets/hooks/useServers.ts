import ServerApi from "@/monitoring/api/servers/[slug]/_interface";
import ServersApi from "@/monitoring/api/servers/_interface";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useServers = <T extends string | undefined = undefined>(slug?: T) => {
    type ResponseType = T extends string
        ? ServerApi.Get.Response
        : ServersApi.Get.Response;

    return useSWR<ResponseType>(
        `/monitoring/api/servers/${slug || ""}`,
        fetcher
    );
};

export default useServers;
