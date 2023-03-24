import { TouchableOpacityProps } from 'react-native'
import {ButtonRow, Container, Marker, Row, Title} from './styles'

type Props = TouchableOpacityProps &{
    title?: string,
    diet?: any,
    setDiet?: any,
}

export function Select({title, diet, setDiet, ...rest}: Props){
    console.log(diet, 'take diet')
    return (
        <Container>
            <Title>Está dentro da dieta?</Title>
        <Row>
            <ButtonRow status={diet ? true : null} onPress={() => setDiet(true)} {...rest} >
                <Marker good/>
                <Title>Sim</Title>
            </ButtonRow>
            <ButtonRow status={!diet ? false : null} onPress={() => setDiet(false)}>
                <Marker />
                <Title>Não</Title>
            </ButtonRow>
        </Row>
        </Container>
    )
}