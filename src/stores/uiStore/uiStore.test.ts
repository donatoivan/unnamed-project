import { RootStore } from "../rootStore";
import { GlobalView } from "./globalView";
import { UiStore } from "./uiStore";

describe("UiStore", () => {
  let testRootStore: RootStore;

  test("UiStore properties", () => {
    testRootStore = new RootStore();

    const uiStore: UiStore = new UiStore(testRootStore);

    expect(uiStore.globalView).toBeInstanceOf(GlobalView);
  });
});
