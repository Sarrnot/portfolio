import LogServerStatus from "@shared/Entity/LogServerStatus";
import { Attributes } from "sequelize";

export type AvailableValues = Exclude<
    keyof Attributes<LogServerStatus>,
    "id" | "serverId" | "createdAt" | "updatedAt"
>;

type CreatedAt = Extract<keyof Attributes<LogServerStatus>, "createdAt">;

type Log<T extends AvailableValues> = Pick<LogServerStatus, T> & {
    [key in CreatedAt]: Date;
};

export default Log;
