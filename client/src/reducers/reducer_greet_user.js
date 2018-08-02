export default function(state = null, action) {
    switch(action.type) {
        case "USERNAME_ENTERED":
            return action.payload;
        default:
            return state;
    }
}