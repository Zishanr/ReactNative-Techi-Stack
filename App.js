import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';  // react-redux library for linking between redux and react
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common';
import LibraryList from './src/components/LibraryList';


const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headingText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
}

export default App;

