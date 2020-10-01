import { RootStore } from "../rootStore";
import { ClockStore } from "./clockStore/clockStore";

export class DataStore {
  clockStore: ClockStore;

  constructor(rootStore: RootStore) {
    this.clockStore = new ClockStore(rootStore);
  }
}
