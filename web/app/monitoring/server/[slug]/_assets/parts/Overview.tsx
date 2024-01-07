"use client";

import StatusIndicator from "@/monitoring/_assets/components/StatusIndicator";
import StatusToText from "@/monitoring/_assets/helper/StatusToText";
import { useLog } from "@/monitoring/_assets/hooks/useLogs";
import useServers from "@/monitoring/_assets/hooks/useServers";
import Status from "@shared/Type/Status";

type Props = {
    slug: string;
};

const Overview = (props: Props) => {
    const { slug } = props;

    const server = useServers(slug);
    const logs = useLog(slug, "status", 1);

    if (server.isLoading || logs.isLoading) {
        return (
            <Container>
                <div>Loading</div>
                <StatusIndicator
                    status={Status.ok}
                    message="Loading"
                    inactive={true}
                />
            </Container>
        );
    }

    if (server.error || !server.data || logs.error || !logs.data) {
        return <>Error</>;
    }

    const status = logs.data[0].status;

    return (
        <Container>
            <div className="flex flex-col gap-4">
                <div className="text-3xl">{server.data.name}</div>
                <div className="text-xl">IP: {server.data.ip}</div>
            </div>
            <div className="">
                <StatusIndicator
                    status={status}
                    message={StatusToText(status)}
                    fontSize={
                        status === Status.notResponding
                            ? "text-lg sm:text-2xl"
                            : undefined
                    }
                />
            </div>
        </Container>
    );
};

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="bg-surface flex flex-col items-center px-4 py-6 text-center sm:flex-row justify-center gap-4">
            {children}
        </section>
    );
};

export default Overview;
