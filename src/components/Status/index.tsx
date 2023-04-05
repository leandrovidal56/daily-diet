import { TouchableOpacityProps } from 'react-native'
import {ButtonRow, Container, Marker,  Title} from './styles'

type Props = TouchableOpacityProps &{
    title?: string,
    good?: boolean,
}

export function Status({title, good}: Props){
    return (
        <Container>
            <ButtonRow good={good}>
                <Marker good={good}/>
                <Title>{title}</Title>
            </ButtonRow>
        </Container>
    )
}