import React, { useState } from 'react'
import { Text } from 'react-native';

import Estilo from '../estilo';

import Filho from './Filho'

export default props => {
    const [num, setNum] = useState(0)

    const exibirValor = (number) => setNum(number)

    return (
        <>
            <Text style={Estilo.txtG} >{num}</Text>
            <Filho 
                min={1}
                max={60} 
                funcao={exibirValor} 
            />
        </>
    )
}