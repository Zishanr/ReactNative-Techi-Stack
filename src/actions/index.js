/* In this file we will define all the actions we are going to use in the project*/

// Action creator - JavaScript Function

// selectLibrary is the action creator
export const selectLibrary = (libraryId) => {
    return {  // Returning Action Object
        type: 'select_library',
        payload: libraryId
    };
}

// Test action is the action creator
export const testAction = (libraryId) => {
    return {  // Returning Action Object
        type: 'text',
        payload: libraryId
    };
}