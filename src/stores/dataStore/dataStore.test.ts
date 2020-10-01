import { RootStore } from "../rootStore";
import { DataStore } from "./dataStore";
import { ClockStore } from "./clockStore/clockStore";

describe("DataStore", () => {
  let testRootStore: RootStore;
  test("DataStore propeties", () => {
    testRootStore = new RootStore();

    const dataStore: DataStore = new DataStore(testRootStore);

    expect(dataStore.clockStore).toBeInstanceOf(ClockStore);
  });
});
