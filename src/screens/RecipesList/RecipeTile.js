import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function RecipeTile({ item, navigation }) {

    return (
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate("SleakeDetails", {
                id: item.id
            })
        }}
        style={styles.sleake}>
            <View style={styles.container}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style={styles.subcontainer}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>
            {/* <Text style={styles.details}>{item.details}</Text> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    sleake: {
        padding:20,
        borderColor:'#dcdcdc',
        borderWidth:0.5
    },
    container: {
        flexDirection:"row",
    },
    image: {
        width:"30%",
        height:70
    },
    subcontainer: {
        width:"70%",
        padding: 7
    },
    title: {
        fontWeight:"bold",
        fontSize:16
    }
})