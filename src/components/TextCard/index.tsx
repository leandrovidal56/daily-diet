import { TouchableOpacityProps } from 'react-native'
import {Container, Title, SubTitle} from './styles'

type Props = TouchableOpacityProps & {
    title: string;
    subTitle?: string;
}

export function TextCard({title, subTitle, ...rest}: Props){
    return (
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Container>
    )
}