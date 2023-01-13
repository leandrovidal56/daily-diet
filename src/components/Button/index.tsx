import { TouchableOpacityProps } from 'react-native'
import {Container, Title} from './styles'

type Props = TouchableOpacityProps &{
    title: string,
    small?: boolean,
}

export function Button({title, small}: Props){
    return (
        <Container small={small}>
            <Title>{title}</Title>
        </Container>
    )
}