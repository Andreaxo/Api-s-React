import { create } from 'zustand'

export const useContextRM = create((set) => ({
    characterContext: [],
    
    followCharacter: (newCharacter) => set ({ characterContext: newCharacter})


}));

