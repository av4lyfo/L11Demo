import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';



const styles = StyleSheet.create({
   listStyle: {
      borderWidth: 1,
   },
});

const Home = ({navigation}) => {
    const [myData, setMyData] = useState([]);

    const renderItem = ({item, index, section}) => {
        return (
            <View style={styles.listStyle}>
                <Text>{item.name}</Text>
            </View>
        );
    };

    useEffect(() => {
        fetch("https://jsonhost.com/json/f27863d70d80ced7284422e94f825759")
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                    let myFilteredData = myJson.filter((item) =>
                        item.name.includes("movie"));
                    setMyData(myFilteredData);
            })
    },[]);



   return (
    <View>
      <StatusBar/>
	  <Button title='Add Item' onPress={
      ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData)})}}/>
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
