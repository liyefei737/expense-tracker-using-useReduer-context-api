import ACTION_STRS from "./ACTION_STRS";

export default (state, action) => {
    switch (action.type) {
        case ACTION_STRS.DELETE_TRANSACTION:
            console.log(`ACTION: DELETE_TRANSACTION delete trxn ${action.id}`);
            return {
                ...state,
                transactions: state.transactions.filter((trxn) => trxn.id !== action.id)
            }
        case "ADD_TRANSACTION":
            console.log(`ACTION: DELETE_TRANSACTION delete trxn ${action.id}`);
            //TODO check uniqueness of trnasaction
            return {
                ...state,
                transactions: [...state.transactions, action.transaction]
            }
        default:
            return state;

    }
}
