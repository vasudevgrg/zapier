import { atom } from "./store";

export const userAtom = atom({
    key: 'user',
    default: {
        name: '',
        email: '',
        logged_in: false
    }
})

export const OpenZapModal = atom({
    key: 'open_modal',
    default: false
})

export const ZapListState = atom<{
    app?: string,
    metadata?: Record<string, unknown>,
    type: string
}[]>({
    key:'zap_list',
    default: [{
        type: 'trigger'
    }]
})

 export const CurrentZapIndex = atom({
    key: 'current_zap_index',
    default: 0
})
