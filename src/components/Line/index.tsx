import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Container, Row, Time, Space, Description, Marker  } from "./styles";

type Props = TouchableOpacity & {
    date?: string;
    hour?: string;
    title?: string;
    description?: string;
    diet?: boolean;
    item?: Object;

}

export function Line({date, hour, title, time, diet, description, item}: Props) {
    const navigation = useNavigation();

    function handleEditEat(){
        navigation.navigate('Eat', item)
      }
    return (
        <Container onPress={handleEditEat}>
            <Row>
                <Time>{hour}</Time>
                <Space>|</Space>
                <Description>{title} {time}</Description>
            </Row>
                <Marker good={diet} />
            
        </Container>
    )
}