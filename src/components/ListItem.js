import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    UIManager,
    Platform,
    LayoutAnimation
} from 'react-native';
import { CardSection } from './common/index';
import { connect } from 'react-redux';
import * as actions from '../actions';  // * here is used to import many things/object from other file. Here we are importing all the actions from action index.js


class ListItem extends Component {

    // Setting LayoutAnimation for android os.
    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    // For Animations
    componentWillUpdate() { // This LifeCycle method called when the component is about to re-render on the device.
        LayoutAnimation.spring();
    }
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        //onsole.log(this.props);
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>{/* Calling action creator with library id which in return pass the action object to all the reducers in the application */}
                <View>{/* Also in {this.props.selectLibrary(id)} it is setting the state in redux store which is re-rendering the listItem component*/}
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDetail()}
                </View>
            </TouchableWithoutFeedback>
        );
    }

    // Helper method to show details of library
    renderDetail() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

const mapStateToProps = (state, ownProps) => {  // ownProps === this.props.library, ownProps indicates the prop passed by the parent component to the child component.
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
    //return { libraryId: state.selectedLibraryId };
}
export default connect(mapStateToProps, actions)(ListItem);  // Passing mapStateToProps (first argument) as null and  actions as a second argument.
//export default connect(null, actions)(ListItem);  // Passing mapStateToProps (first argument) as null and  actions as a second argument.