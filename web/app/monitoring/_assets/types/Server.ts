import ServerEntity from "@shared/Entity/Server";

type Server = Pick<ServerEntity, "name" | "slug" | "ip">;

export default Server;
