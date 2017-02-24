// React
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

//Redux
import { connect } from 'react-redux';
import actions from './redux/actions.js'

//Redux generator
import reduxGenerator from 'magic-redux-generator'

class App extends Component {

  fetchRecords(){
    //reduxGenerator.webservices.configureToken('Your token for Authorization header') // Set token on login
    this.props.fetchRecords()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.fetchRecords()}>
          <Text style={styles.text}>{'Fetch records'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.props.fetchItem()}>
          <Text style={styles.text}>{'Fetch item'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.props.createItem()}>
          <Text style={styles.text}>{'Create item'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

let mapDispatchToProps = (dispatch, props) => {
  return {
		fetchRecords: () => {

      let postDispatch = (v) => {
        if(v.users){
          let users = v.users.map(user => user.username);
          Alert.alert("Users:", users.toString())
        }
      }

      dispatch(actions.fetch(null, null, null, null, null, postDispatch))
      //dispatch(actions.fetch(null, null, 'users', null, null, null)) // If dont send postDispatch, send responseType
		},

    fetchItem: () => {

      let preDispatch = (v) => {
        return new Promise(function (fulfill, reject) {
          let textUser = "Id: " + v.id + ", Username: " + v.username + ", Password: " + v.password
          fulfill(textUser)
        })
      }

      let postDispatch = (v) => {
        v && Alert.alert("User: ", v)
      }

      dispatch(actions.fetchItem('/1', null, null, preDispatch, postDispatch))
    },

    createItem: () => {

      let data = {username: 'juan', password: '12345678'}

      let postDispatch = (v) => {
        v && Alert.alert("User:", "Id: " + v.id + ", Username: " + v.username + ", Password: " + v.password)
      }

      dispatch(actions.create(data, null, null, postDispatch))
    },
  }
};

let mapStateToProps = (state) => {
	return {
    list: state.users.list,
    item: state.users.item,
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
  button: {
    width: 200,
    height: 60,
    marginBottom: 20,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
});
