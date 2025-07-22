import { ProductT } from "./types";

export type GlobalStoreT = {
  popupStore: PopupStoreT;
  notificationStore: NotificationStoreT;
};

export type PopupStoreT = {
  feedback: boolean;
  menu: boolean;
  order: boolean;
  product: ProductT | null;

  openPopup: (type: string, product?: ProductT) => void;
  closePopup: (type: string) => void;
};

export type NotificationStoreT = {
  type: "success" | "error";
  isVisible: boolean;
  setNotification: (type: "success" | "error") => void;
  removeNotification: () => void;
};
