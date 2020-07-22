// Action Types

export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'


// Action Creators


export const inCrease = (value = '') => {
    return {
        type: INCREASE,
        value
    }
}

export const deCrease = (value = '') => {
    return {
        type: DECREASE,
        value
    }
}

// reducer

const initialState = 0
const ReducerCounter = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREASE:
            state += 1
            return state
        case DECREASE:
            state -=1
            return state
        default:
            return state
    }
}

export default ReducerCounter
