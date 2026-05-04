import { atom } from "recoil";

export const userAtom = atom({
    key: 'user',
    default: {
        name: '',
        email: '',
        logged_in: false
    }
})

export const countZap = atom({
    key:'create_zap',
    default: [1]
})