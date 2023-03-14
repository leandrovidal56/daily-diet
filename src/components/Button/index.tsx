import { TouchableOpacityProps } from 'react-native'
import {Container, Title} from './styles'

type Props = TouchableOpacityProps &{
    title: string,
    small?: boolean,
    background?: string,
    borderColor?: string,
    textColor?: string,
    marginBottom?: number,
}

export function Button({title, small, background, borderColor, textColor, marginBottom}: Props){
    return (
        <Container small={small} background={background} borderColor={borderColor} marginBottom={marginBottom}>
            <Title textColor={textColor}>{title}</Title>
        </Container>
    )
}