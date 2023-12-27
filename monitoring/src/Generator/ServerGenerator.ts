import RandExp from "randexp";

import Server from "@local/shared/Entity/Server";
import { CreationAttributes } from "sequelize";

const CITIES = [
    "Dublin",
    "Berlin",
    "Moscow",
    "Tokyo",
    "London",
    "Paris",
    "Athens",
    "Helsinki",
    "Washington",
    "Jerusalem",
    "Ottawa",
    "Canberra",
];

class ServerGenerator {
    static counter = 1;

    public static generate(): CreationAttributes<Server> {
        const id = this.counter;
        const name = ServerGenerator.createRandomName();
        const slug = name.replaceAll(" ", "-").toLowerCase();
        const ip = ServerGenerator.createRandomIp();

        this.counter++;

        return { id, name, slug, ip };
    }

    private static createRandomName() {
        const randId = new RandExp(/[A-Z0-9]{3,5}-[0-9]{2,3}/);

        const name = `${ServerGenerator.getRandomCity()} ${randId.gen()}`;

        return name;
    }

    private static getRandomCity() {
        return CITIES[Math.floor(Math.random() * CITIES.length)];
    }

    private static createRandomIp() {
        const genNum = (min: number, max: number) =>
            Math.floor(Math.random() * (max - min)) + min;

        const ip = `${genNum(1, 255)}.${genNum(0, 255)}.${genNum(
            0,
            255
        )}.${genNum(0, 255)}`;

        return ip;
    }
}

export default ServerGenerator;
