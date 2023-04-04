import { TouchableOpacityProps } from 'react-native'
import {Container, Title, SubTitle} from './styles'

type Props = TouchableOpacityProps & {
    title: number ;
    subTitle?: string;
}

export function Text({title, subTitle, ...rest}: Props){
    return (
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Container>
    )
}