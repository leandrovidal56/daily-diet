import { Text } from '@components/Text';
import { TextCard } from '@components/TextCard';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';

type Props = TouchableOpacityProps &{
    title: string;
    subTitle?: string;
    fail?: boolean;
    small?: boolean;

}

export function SummaryCard({title, subTitle, fail, small}: Props) {
    return (
        <Container
            fail={fail}
            small={small}
        >
            <TextCard
                title={title}
                subTitle={subTitle}
            />
        </Container>
    )
}