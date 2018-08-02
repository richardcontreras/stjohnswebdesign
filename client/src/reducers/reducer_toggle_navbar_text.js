export default function(state = null, action) {
    switch(action.type) {
        case "TOGGLED_NAVBAR_TEXT":
            return action.payload;
        default:
            return state;
    }
}