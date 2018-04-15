/* Never return undefine value from reducer is called, insted return null, returning undefined value make an error*/

export default (state = null, action) => {  // We can't return undefine from a reducer otherwise redux will throw and error, we can return null in place.
    switch (action.type) {
        case 'select_library':
            return action.payload;
            break;
        default:
            return state;
    }
    console.log(action);
    //return null;  // returning null value during intial setup, instead of undeined.
};