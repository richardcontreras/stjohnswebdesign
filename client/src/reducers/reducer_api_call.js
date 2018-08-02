export default function(state = null, action) {
    switch (action.type) {
        case 'FETCH_API_DATA': 
            return action.payload.data;
        default: 
            return state;
    }
}