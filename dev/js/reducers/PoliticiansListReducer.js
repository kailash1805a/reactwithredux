export default function (state = null, action) {
    switch (action.type) {
        case "SELECT_POLITICIAN":
            return action.payload;
            break;
    }
    return state;
}