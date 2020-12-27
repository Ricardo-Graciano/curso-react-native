import React from 'react'
import { Button } from 'react-native'

export default props => {
    const generateRandomNumber = (min, max) => {
        const fator = max - min + 1
        return parseInt(Math.random() * fator + min)
    }
    return (
        <Button 
            title="Executar!"
            onPress={() => {
                const n = generateRandomNumber(props.min, props.max)
                props.funcao(n)
            }}
        />
    )
}