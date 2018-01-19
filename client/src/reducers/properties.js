export default (state=[], action=[]) => {
    switch (action.type) {
        case 'GET_PROPERTIES':
            return action.properties;
        default: return state
    }
}