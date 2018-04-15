/* I this file we are going to define every reducer we are going to use in the project */

import { combineReducers } from 'redux';  // combineReducers is used to combine multiple reducers used in the application as we can have multiple reducers
import LibraryReducer from './LibraryReducer';
import Test from './Test';
import SelectionReducer from './SelectionReducer';


/* For every reducer we create we should wire it up in the combineReducers function */

export default combineReducers({
    libraries: LibraryReducer,  // Here we are assigning a key (libraries) to LibraryReducer object it will be shown like this object = {libraries: []}.
    selectedLibraryId: SelectionReducer,
    testreducer: Test   // Jsut for test
});