export default function(state = null, action) {
    switch(action.type) {
        case "CHANGED_NAVBAR_COLOR":
            return action.payload;
        default: 
            return state;
    }
}