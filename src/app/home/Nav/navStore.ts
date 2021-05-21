import { action ,observable} from "mobx";
import { createContext } from "react";

export default class NavStore {
  @observable click = false;
  @observable dropDown = false;
  @action setClick = (flag : boolean) => {
    this.click = flag;
  };
}
export const NavStoreContext = createContext(new NavStore());