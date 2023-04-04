import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Container, Row, Time, Space, Description, Marker  } from "./styles";


export function Line({item}: any) {
    const navigation = useNavigation();
    console.log(item, 'take item')

    function handleEditEat(){
        navigation.navigate('Eat', item)
      }
      
      return (
        <Container onPress={handleEditEat}>
            <Row>
                <Time>{item.time}</Time>
                <Space>|</Space>
                <Description>{item.eat} {item.description}</Description>
            </Row>
            <Marker good={item.diet} />
        </Container>
    )
}