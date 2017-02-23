// React
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Redux
import { connect } from 'react-redux';
import actions from './redux/actions.js'

//Redux generator
import reduxGenerator from 'magic-redux-generator'

class App extends Component {

  componentDidMount(){
    //reduxGenerator.webservices.configureToken('aaa') // Set token on login
    this.props.fetchRecords()
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

let mapDispatchToProps = (dispatch, props) => {
  return {
		fetchRecords: () => {
      dispatch(actions.fetch(null, null, 'users'))
		}
  }
};

let mapStateToProps = (state) => {
  console.log("App state: ", state)
	return {
    list: state.users.list,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
