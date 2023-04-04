import { Text } from '@components/Text';
import { TextCard } from '@components/TextCard';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';

type Props = TouchableOpacityProps &{
    title: string | number;
    subTitle?: string;
    fail?: boolean;
    success?: boolean;
    small?: boolean;
    background?: string;

}

export function SummaryCard({title, subTitle, fail, background, small}: Props) {
    return (
        <Container
            fail={fail}
            background={background}
            small={small}
        >
            <TextCard
                title={title}
                subTitle={subTitle}
            />
        </Container>
    )
}