import React, { Component } from 'react';
import { connect } from 'react-redux';  // connect method of react-redux library to connect react component to redux store to access the state stored in state
import { ListView, Text } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

    // React Component LifeCycle Method
    componentWillMount() {
        const ds = new ListView.DataSource({  // Creating a ListView 
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraryData); // Passing the libraries object as a data to the Listview
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderListRow} />   // Passing the data in listview to show in list
            // console.log(this.props);
        );
    }

    // Helper Method to render each row in list
    renderListRow(library) {  // Library is the current object of the library array list passed from renderRow method of listView
        return <ListItem library={library} />;
    }
}

// state here is the state from store which is passed by connect method
const mapStateToProps = state => { // Fedral function passed to connect function
    console.log(state);
    return { libraryData: state.libraries };  // returning object from mapStateToProps will send that object as a props to the respected react component binded to connnect function.
};

// Passing mapStateToProps as a function in connect method
export default connect(mapStateToProps)(LibraryList);  //Connect is wrapping the react component (LibraryList) with store. Here when connect function is called it returns another function which is called with LibraryList(React Component) as a parameter.