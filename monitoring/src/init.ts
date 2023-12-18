import GeneratorManager from "./Generator/GeneratorManager";

import MonitoringDatabase from "./Database/MonitoringDatabase";
import SequelizeProvider from "./Provider/SequelizeProvider";

const init = async () => {
    await new MonitoringDatabase(SequelizeProvider.monitoring).sync();
    new GeneratorManager().start();
};

init();
