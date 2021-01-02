import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PassoStack from '../components/PassoStack'

import TelaA from '../views/TelaA'
import TelaC from '../views/TelaC'
import TelaB from '../views/TelaB'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen 
            name="TelaA" 
            options={{title: 'Informações Iniciais'}}>
                {props => (
                    <PassoStack {...props} avancar='TelaB' >
                        <TelaA />
                    </PassoStack>
                )}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
            {props => (
                <PassoStack avancar='TelaC' voltar {...props} avancarParams={{numero: parseInt(Math.random() * 100)}}>
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {props => (
                <PassoStack avancar='TelaC' voltar {...props} avancarParams={{numero: parseInt(Math.random() * 100)}}>
                    <TelaC {...props}/>
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)