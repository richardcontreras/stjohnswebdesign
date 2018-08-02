export default function(state = null, action) {
    switch(action.type) {
        case "SERVICE_SELECTED":
            return action.payload;
        default:
            return state;
    }
}