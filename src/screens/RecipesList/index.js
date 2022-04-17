import React, { useEffect, useState } from 'react'
import {
    FlatList,
    Text,
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';
import { useSelector } from 'react-redux'
import { useFetchRecipes } from '../../api/recipes/useFetchRecipes';
import { getRecipesList } from '../../redux/selectors';
import RecipeTile from './RecipeTile'

export default function RecipesList ({ navigation }) {

    const [page, setPage] = useState(1)
    const {getAllRecipes} = useFetchRecipes()
    const allRecipes =  useSelector(getRecipesList)

    useEffect(() => {
        getAllRecipes(page)
    }, [page])

    const renderItem = ({item}) => {
        return ( <RecipeTile navigation={navigation} item={item} />)
    }

    const onEndReached = () => {
        setPage(currentPage => currentPage + 1)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={allRecipes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                onEndReached={onEndReached}
                ListFooterComponent={() => <View style={{padding:40}}><ActivityIndicator></ActivityIndicator></View>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        margin:5
    }
})