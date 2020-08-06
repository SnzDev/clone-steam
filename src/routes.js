import React from 'react';
import { Button, View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import Friends from './pages/Friends';


function Home() {

    return (

        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Friends"
                    component={Friends}
                    options={{
                        headerTintColor: '#fcffff',
                        headerStyle: { backgroundColor: '#314055' },
                        headerLeft: () => (
                            <TouchableNativeFeedback onPress={() => { alert('hello meu chapa!') }}>
                                <View>
                                    <Icon style={{ color: '#CCC', padding: 10, fontSize: 30 }} name="menu" />
                                </View>
                            </TouchableNativeFeedback>
                        ),
                        headerRight: () => (
                            <View style={{flexDirection: 'row'}}>
                                <TouchableNativeFeedback onPress={() => { alert('hello meu chapa!') }}>
                                    <View>
                                        <Icon style={{ color: '#CCC', padding: 10, fontSize: 30 }} name="search" />
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback onPress={() => { alert('hello meu chapa!') }}>
                                    <View>
                                        <Icon style={{ color: '#CCC', padding: 10, fontSize: 30 }} name="refresh" />
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Routes() {


    return (


        <NavigationContainer >
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} options={{ title: 'My home' }} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

export default Routes;
