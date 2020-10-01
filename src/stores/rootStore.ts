import { DataStore } from "./dataStore/dataStore";
import { UiStore } from "./uiStore/uiStore";

export class RootStore {
  dataStore: DataStore;
  uiStore: UiStore;
  constructor() {
    this.dataStore = new DataStore(this);
    this.uiStore = new UiStore(this);
  }
}
