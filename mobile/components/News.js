import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Navigator,
  Button,
  View
} from 'react-native'
import { Search } from './Search'
import { List } from './List'

export default class News extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            datas: [],
            searchKeyword : ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount(){
      const that = this

      fetch('http://hn.algolia.com/api/v1/search?query=react')
      .then(res => res.json())
      .then(data => {
          setTimeout(()=>{
            that.setState({
              datas : data.hits
            })
          },0)
      })
    }

    handleChange(e){
      this.setState({
        searchKeyword: e.nativeEvent.text
      })
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.welcome}>
                Hacktiv8 News !
              </Text>
              <Image
              style={styles.newspaper}
              source={{uri : "https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Newspaper_news_rss_vector_paper_symbol_simple.png"}}
              />
              <View style={styles.searchForm}>
              <Search handleChange={this.handleChange} />
              </View>
            </View>
            <View>
            <List datas={this.state.datas.filter(data =>{
              return data.title.toLowerCase().indexOf(this.state.searchKeyword.toLowerCase()) !== -1

            })}/>
            </View>
            <Button onPress={this.props.goToPeople} title="People"/>
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
        backgroundColor: "steelblue",
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
    newspaper: {
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
