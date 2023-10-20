import { create } from "zustand";
import {persist,createJSONStorage} from 'zustand/middleware' 

type WelcomeModalProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose:() => void;
}


export const welcomeModal = create(persist<WelcomeModalProps>((set) => ({
    isOpen:true,
    onOpen:() => set({isOpen:true}),
    onClose: () => set({isOpen:false})
}), {
    name:"welcome-modal",
    skipHydration:true,
    storage:createJSONStorage(() => sessionStorage)
}))




