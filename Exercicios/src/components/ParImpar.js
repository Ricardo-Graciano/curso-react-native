import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './estilo'

export default ({num = 0}) => {
    return (
        <View>
            <Text> O texto é </Text>
            <Text style={Estilo.txtG}> 
                {num % 2 === 0 ? 'Par' : 'Ímpar'}
            </Text>
        </View>
    )
}