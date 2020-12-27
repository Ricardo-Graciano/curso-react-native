import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

//import Primeiro from './components/Primeiro'
//import X, { Comp1, Comp2 } from './components/Multi' 
//import MinMax from './components/MinMax'
//import Aleatorio from './components/Aleatorio'
//import Titulo from './components/Titulo'
//import Button from './components/Botao'
//import Contador from './components/Contador'
//import Pai from './components/direta/Pai'
//import Pai from './components/indireta/Pai'
//import ContadorV2 from './components/contador/ContadorV2'
//import Diferenciar from './components/Diferenciar'
//import ParImpar from './components/ParImpar'
//import Familia from './components/relacao/Familia'
//import Membro from './components/relacao/Membro'
//import UsuarioLogado from './components/UsuarioLogado'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import FlexboxV1 from './components/layout/FlexboxV1'
//import FlexboxV2 from './components/layout/FlexboxV2'
//import FlexboxV3 from './components/layout/FlexboxV3'
//import FlexboxV4 from './components/layout/FlexboxV4'
import Mega from './components/mega/Mega'

export default () => (
    <SafeAreaView style={style.App}>
        
        
        <Mega qtdeNumeros={12} />

        {/*
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{nome: 'Gui', email: ''}}/>
        <UsuarioLogado usuario={{nome: 'Ana', email: 'ana@gui.com'}}/>
        <UsuarioLogado usuario={{}}/>
        <UsuarioLogado usuario={null}/>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda"/>
            <Membro nome="Carlos" sobrenome="Arruda"/>
        </Familia>

        <Familia>
            <Membro nome="Ana" sobrenome="Silva"/>
            <Membro nome="Julia" sobrenome="Silva"/>
            <Membro nome="Gui" sobrenome="Silva"/>
            <Membro nome="Rebeca" sobrenome="Silva"/>
        </Familia>
        <ParImpar num={3}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Contador inicial={100}/>
        <Contador passo={50}/>
        <Button />
        <Titulo 
            principal="Cadastro Produto" 
            secundario="Tela de cadastro do produto"
        />

        <Aleatorio min={3} max={20}/>
        <Aleatorio min={3} max={20}/>
        <Aleatorio min={3} max={20}/>
        <Aleatorio min={3} max={20}/>
        <Aleatorio min={3} max={20}/>
        <Aleatorio min={3} max={20}/>

         <MinMax min={3} max={20}/>
        <MinMax min={1} max={94}/>
        <X />
        <Comp1 />
        <Comp2 />

        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})