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
                {/* <Time>12;34</Time> */}
                <Space>|</Space>
                <Description numberOfLines={1} ellipsizeMode="tail">{item.eat}</Description>
                {/* <Description numberOfLines={1} ellipsizeMode="tail">12341243</Description> */}
            </Row>
            <Marker good={item.diet} />
            {/* <Marker good={true} /> */}
        </Container>
    )
}