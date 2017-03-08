/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import News from './components/News'
import People from './components/People'

export default class mobile extends Component {

  goToPeople(navigator){
    navigator.push({
      title : 'People'
    })
  }

  goToNews(navigator){
    navigator.push({
      title : 'News'
    })
  }
  back(navigator){
    navigator.pop()
  }

  render() {
    return (
      <Navigator
        initialRoute={{title:'News'}}
        renderScene={(route,navigator)=>{
          switch(route.title){
            case 'News': return <News navigator={navigator} back={()=>this.back(navigator)} goToPeople={()=>this.goToPeople(navigator)}/>
            case 'People': return <People navigator={navigator} back={()=>this.back(navigator)} goToNews={()=>this.goToNews(navigator)}/>
            default : return <News />
          }
        }}
        />

    );
  }
}

AppRegistry.registerComponent('mobile', () => mobile);
