import { TouchableOpacityProps } from 'react-native'
import {Container, Title} from './styles'

type Props = TouchableOpacityProps &{
    title: string,
}

export function Button({title}: Props){
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}