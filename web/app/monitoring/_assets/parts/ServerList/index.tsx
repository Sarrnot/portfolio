"use client";

import { ArrowPathIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import useLogs from "../../hooks/useLogs";
import useServers from "../../hooks/useServers";
import Row from "./Row";
import Cell from "./Cell";
import StatusToText from "../../helper/StatusToText";
import Status from "@shared/Type/Status";
import Header from "./Header";
import Container from "./Container";

const STATUS_COLOR_DICTIONARY = {
    [Status.ok]: "bg-surface group-hover/row:bg-primary",
    [Status.warning]: "bg-warning",
    [Status.error]: "bg-error",
    [Status.notResponding]: "bg-error",
};

const ServerList = () => {
    const servers = useServers();
    const logs = useLogs(
        servers.data?.map(({ slug }) => slug),
        "status",
        1
    );

    if (servers.isLoading || logs.isLoading) {
        return (
            <Container>
                <Header />
                <Row>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Cell
                            background="bg-surface"
                            key={i}
                            className={`${i === 1 && "hidden sm:block"} ${
                                i === 2 && "hidden md:block"
                            }`}
                        >
                            <ArrowPathIcon className="w-6 h-6 inline animate-spinSlow" />
                        </Cell>
                    ))}
                    <Cell background="">
                        <ChevronRightIcon className="w-6 h-6 inline" />
                    </Cell>
                </Row>
            </Container>
        );
    }

    if (servers.error || !servers.data || logs.error || !logs.data) {
        return <div className="text-center">Something went wrong</div>;
    }

    return (
        <Container>
            <Header />
            {servers.data.map((server, i) => {
                const { status } = logs.data![i][0];

                return (
                    <Row key={i} href={`/monitoring/server/${server.slug}`}>
                        <Cell
                            background={`${STATUS_COLOR_DICTIONARY[status]} sm:bg-surface sm:group-hover/row:bg-primary`}
                        >
                            {server.name}
                        </Cell>
                        <Cell className="hidden md:block">{server.ip}</Cell>
                        <Cell
                            className="hidden sm:block"
                            background={`${STATUS_COLOR_DICTIONARY[status]}`}
                        >
                            {StatusToText(status)}
                        </Cell>
                        <Cell background="">
                            <ChevronRightIcon className="w-6 h-6 inline group-hover/row:text-secondary" />
                        </Cell>
                    </Row>
                );
            })}
        </Container>
    );
};

export default ServerList;
