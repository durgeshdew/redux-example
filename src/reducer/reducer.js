

export const reducer = (prevState = { text: 'Welcome' }, action) => {
    switch (action.type) {
        case "BIRTHDAY":
            return Object.assign({}, action)
        case "WEDDING":
            return Object.assign({}, action);
        default:
            return prevState;
    }
}