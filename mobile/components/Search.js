import React from 'react'
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native'

export const Search = (props) => {
  return (
    <View>
    <TextInput style={styles.searchInput} onChange={props.handleChange} placeholder="search"/>
    </View>
  )
}


const styles = StyleSheet.create({

  searchInput :{
    width : '100%',
    height : 20,
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:1,
    textAlign : 'center',
    fontSize: 10
  }
})
