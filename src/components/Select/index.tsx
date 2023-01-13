import { TouchableOpacityProps } from 'react-native'
import {ButtonRow, Container, Marker, Row, Title} from './styles'

type Props = TouchableOpacityProps &{
    title?: string,

}

export function Select({title}: Props){
    return (
        <Container>

            <Title>Está dentro da dieta?</Title>
        <Row>
            <ButtonRow good>
                <Marker good/>
                <Title>Sim</Title>
            </ButtonRow>
            <ButtonRow>
                <Marker />
                <Title>Não</Title>
            </ButtonRow>
            
            
        </Row>
        </Container>
    )
}