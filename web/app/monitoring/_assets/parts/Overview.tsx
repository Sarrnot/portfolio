"use client";

import Status from "@shared/Type/Status";
import StatusIndicator from "../components/StatusIndicator";
import useLogs from "../hooks/useLogs";
import useServers from "../hooks/useServers";

const Overview = () => {
    const servers = useServers();
    const logs = useLogs(
        servers.data?.map(({ slug }) => slug),
        "status",
        1
    );

    if (servers.isLoading || logs.isLoading) {
        return (
            <Container>
                <StatusIndicator
                    status={Status.ok}
                    message={"Loading"}
                    inactive={true}
                />
            </Container>
        );
    }

    if (servers.error || !servers.data || logs.error || !logs.data) {
        return (
            <Container>
                <StatusIndicator
                    status={Status.error}
                    message={"Error"}
                    inactive={true}
                />
            </Container>
        );
    }

    let ok = 0;
    let warning = 0;
    let error = 0;

    logs.data.forEach((log) => {
        switch (log[0].status) {
            case Status.ok:
                ok++;
                break;
            case Status.error:
                error++;
                break;
            case Status.notResponding:
                error++;
                break;
            case Status.warning:
                warning++;
                break;
        }
    });

    return (
        <Container>
            {ok !== 0 && <StatusIndicator status={Status.ok} message={ok} />}
            {warning !== 0 && (
                <StatusIndicator status={Status.warning} message={warning} />
            )}
            {error !== 0 && (
                <StatusIndicator status={Status.error} message={error} />
            )}
        </Container>
    );
};

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex flex-wrap justify-center bg-surface px-4 py-6">
            {children}
        </section>
    );
};

export default Overview;
