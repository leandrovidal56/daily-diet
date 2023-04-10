import { TouchableOpacityProps } from 'react-native'
import {ButtonRow, Container, Marker, Row, Title} from './styles'

type Props = TouchableOpacityProps &{
    title?: string,
    diet?: any,
    setDiet?: any,
}

export function Select({title, diet, setDiet, ...rest}: Props){
    return (
        <Container>
            <Title>Está dentro da dieta?</Title>
        <Row>
            <ButtonRow status={diet ? diet : null} onPress={() => setDiet(true)} {...rest} >
                <Marker good/>
                <Title>Sim</Title>
            </ButtonRow>
            <ButtonRow status={!diet ? diet : null} onPress={() => setDiet(false)}>
                <Marker />
                <Title>Não</Title>
            </ButtonRow>
        </Row>
        </Container>
    )
}