const ExplorerService = require("./../../app/lib/services/ExplorerService");
const Reader = require("./../../app/lib/utils/Reader");

describe("Unit Test for controllerService", () => {
    test("1.- getExplorerByMission: ", () => {
        const explorer = Reader.readJsonFile("explorers.json");
        const mission = "node";
        const explorerServiceFiltrado = ExplorerService.filterByMission(
            explorer,
            mission
        );
        
        expect(explorerServiceFiltrado[0]).toBe("Woopa1");
    });
});
