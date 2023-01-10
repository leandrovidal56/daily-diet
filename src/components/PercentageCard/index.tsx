import { Text } from '@components/Text';
import { TouchableOpacityProps } from 'react-native';
import {Container} from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    subTitle?: string;
}

export function PercentageCard({title, subTitle}: Props) {
    return (
        <Container>
            <Text
                title={title}
                subTitle={subTitle}
            />
        </Container>

    )
}