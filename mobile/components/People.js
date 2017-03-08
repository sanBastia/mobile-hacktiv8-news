import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native'

export default class People extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            peoples: [
              {id:1,name:"Luke Skywalker"},
              {id:2,name:"Mangkuw Skywalker"},
              {id:3,name:"End Empeduw"},
              {id:4,name:"Alex Skywalker"},
              {id:5,name:"Qblol"}
            ]
        }

    }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.welcome}>
                Hacktiv8 People !
              </Text>
              <Image
              style={styles.people}
              source={{uri : "https://image.freepik.com/free-icon/multiple-users-silhouette_318-49546.jpg"}}
              />
            </View>
            <View>
              {this.state.peoples.map(data =>{
              return (
                <Text key={data.id}>{data.name}</Text>
              )
            })}
            </View>
            <Button onPress={this.props.goToNews} title="News"/>
              <Button onPress={this.props.back} title="Back"/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        backgroundColor: "teal",
        flexDirection: 'column',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    people: {
        width: 40,
        height: 40
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    searchForm : {
      width:"50%"
    }
});
