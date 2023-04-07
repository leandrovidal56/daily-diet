import { useNavigation } from "@react-navigation/native";
import { Container, Row, Time, Space, Description, Marker  } from "./styles";


export function Line({item}: any) {
    const navigation = useNavigation();

    function handleEditEat(){
        navigation.navigate('Eat', item)
      }
      
      return (
        <Container onPress={handleEditEat}>
            <Row>
                <Time>{item.time}</Time>
                <Space>|</Space>
                <Description numberOfLines={1} ellipsizeMode="tail">{item.eat}</Description>
            </Row>
            <Marker good={item.diet} />
        </Container>
    )
}