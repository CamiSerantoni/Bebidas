
import { StateCreator } from "zustand";

type Notification = {
  text:string
  error: boolean
  show: boolean
}


export type NotificationSliceType = {
notification: Notification
};

export const createNotificationsSlice: StateCreator<NotificationSliceType> = (
  set,
  get
) => ({

notification: { 
    text: '',
    error: false,
    show: false
}

});

//El dividir los slices  se le conoce como el patrón:  "Slice pattern" permite tener codigo más organizado
