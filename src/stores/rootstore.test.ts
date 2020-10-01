import { RootStore } from "./rootStore";
import { DataStore } from "./dataStore/dataStore";
import { UiStore } from "./uiStore/uiStore";

describe("RootStore", () => {
  test("Test RootStore properties", () => {
    let rootStore: RootStore = new RootStore();

    expect(rootStore.dataStore).toBeInstanceOf(DataStore);
    expect(rootStore.uiStore).toBeInstanceOf(UiStore);
  });
});
