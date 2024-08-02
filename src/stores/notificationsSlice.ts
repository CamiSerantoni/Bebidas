
import { StateCreator } from "zustand";
import { FavoritesSliceType } from "./favoritesSlice";

type Notification = {
  text:string
  error: boolean
  show: boolean
}


export type NotificationSliceType = {
notification: Notification
showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
};


export const createNotificationsSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [],[], NotificationSliceType > = (
  set
) => ({

notification: { 
    text: '',
    error: false,
    show: false
}, 
showNotification: (payload) => {
    set({
        notification: {
            text: payload.text,
             error: payload.error, 
             show: true
            }
        })
}

});

//El dividir los slices  se le conoce como el patrón:  "Slice pattern" permite tener codigo más organizado
