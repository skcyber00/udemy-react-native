import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RecipesStack } from './RecipesStack';

const Tabs = createBottomTabNavigator()

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={{ headerShown: false }}>
                <Tabs.Screen name="Sleake1" component={RecipesStack} />
                <Tabs.Screen name="Sleake2" component={RecipesStack} />
                <Tabs.Screen name="Sleake3" component={RecipesStack} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}
