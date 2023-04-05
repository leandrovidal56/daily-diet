import { Text } from '@components/Text';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacityProps } from 'react-native';
import {Container} from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    subTitle?: string;
}

export function PercentageCard({title, subTitle}: Props) {
    const navigation = useNavigation();
    function handleStatistics(){
        navigation.navigate('Statistics')
    }
    return (
        <Container onPress={handleStatistics}>
            <Text
                title={title}
                subTitle={subTitle}
            />
        </Container>

    )
}