
import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
    state = {
        data: []
    };

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        
        const response = await fetch("http://10.0.3.2:8000/home3");
        

        const json = await response.json();
        this.setState({ data: json.results });
    };

    render() {
        return (
            <View style={styles.container}>

            
    <FlatList
        data={this.state.data}
        keyExtractor={(x, i) => i}
        renderItem={({ item }) =>
    <Text>
        
        {`${item.nome}`}
        
        
       
    </Text>}
   

        />
         
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },


});
