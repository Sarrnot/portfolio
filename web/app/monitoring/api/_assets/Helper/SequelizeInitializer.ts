import MonitoringDatabase from "@shared/Database/MonitoringDatabase";
import SequelizeProvider from "../Provider/SequelizeProvider";

class SequelizeInitializer {
    private static _instance: SequelizeInitializer;

    private constructor() {
        new MonitoringDatabase(SequelizeProvider.monitoring);
    }

    static get instance() {
        return this._instance || (this._instance = new this());
    }
}

SequelizeInitializer.instance;
