export default function(state = null, action) {
    switch(action.type) {
        case "PRICING_ITEM_SELECTED":
            return action.payload;
        default:
            return state;
    }
}