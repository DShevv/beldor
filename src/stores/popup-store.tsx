import { makeAutoObservable } from "mobx";
import { PopupStoreT } from "@/types/stores";
import { ProductT } from "@/types/types";

class PopupStore implements PopupStoreT {
  feedback = false;
  menu = false;
  order = false;
  product: ProductT | string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  openPopup = (type: string, product?: ProductT | string) => {
    switch (type) {
      case "feedback":
        this.feedback = true;
        break;
      case "menu":
        this.menu = true;
        break;
      case "order":
        this.order = true;
        this.product = product ?? null;
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
      case "order":
        this.order = false;
        this.product = null;
        break;
    }
  };
}

export default PopupStore;
