import { makeAutoObservable } from "mobx";
import { PopupStoreT } from "@/types/stores";

class PopupStore implements PopupStoreT {
  feedback = false;
  menu = false;

  constructor() {
    makeAutoObservable(this);
  }

  openPopup = (type: string) => {
    switch (type) {
      case "feedback":
        this.feedback = true;
        break;
      case "menu":
        this.menu = true;
        break;
    }
  };

  closePopup = (type: string) => {
    switch (type) {
      case "feedback":
        this.feedback = false;
        break;
      case "menu":
        this.menu = false;
        break;
    }
  };
}

export default PopupStore;
