import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getSelectedRecipe } from '../../redux/selectors'
import { Text, StyleSheet, Image, View, ScrollView } from 'react-native';
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes';

export default function RecipesDetails ({ route, navigation }) {
    const { id } = route.params
    const {getRecipeById} = useFetchRecipes()
    const recipe = useSelector(getSelectedRecipe)

    useEffect(() => {
        getRecipeById(id)
    }, [])

    if (!recipe) {
        return <View />
    }

    return (
        <ScrollView>
            <Text style={styles.title}>{recipe.title}</Text>
            <Image source={{uri: recipe.image}} style={styles.image}></Image>
            <View style={styles.subcontainer}>
                {/* <Text style={styles.subdetails}>{recipe.price.price_find}</Text> */}
                <Text style={styles.subdetails}>{recipe.created_at}</Text>
                <Text style={styles.subdetails}>Favoris {recipe.favoris_sum}</Text>
            </View>
            <Text style={styles.details}>{recipe.details}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    subcontainer: {
        flexDirection:"row",
        marginLeft: 15,
        marginRight: 15,
    },
    image: {
        width:"100%",
        height:250,
        marginBottom:10
    },
    title: {
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:15,
        marginTop:15
    },
    details: {
        fontSize:16,
        fontWeight:"bold",
        textAlign:"center",
        padding:10
    },
    subdetails: {
        fontSize:16,
        textAlign:"center",
        padding:10
    }
})