import { Button } from "@components/Button";
import { HeaderBackButton } from "@components/HeaderBackButton";
import { Status } from "@components/Status";
import { useNavigation } from "@react-navigation/native";
import { eatDeleteByUser } from "@storage/user/userDeleteEat";


import { Container, Content, Date, DateText, Text, Title  } from "./styles";

export function Eat({route}: any ){
    const navigation = useNavigation();
    function handleEditEat(){
      navigation.navigate('EditEat', route.params)
    }
    async function  handleDeleteEat(){
      await eatDeleteByUser(route.params)
      navigation.navigate('Home')
    }

    return (
        <Container>
            <HeaderBackButton title ="Refeição"/>
            <Content>
                <Title>{route.params.eat}</Title>
                <Text>
                    {route.params.description}
                </Text>
                <Date>Data e hora</Date>
                <DateText>{route.params.date} às {route.params.time}</DateText>
                <Status title="dentro da dieta" good={route.params.diet}/>
            </Content>
            <Button title="Editar refeição" marginBottom={9} onPress={handleEditEat} />
            <Button
              background="#ffffff"
              borderColor="#1B1D1E"
              title="Excluir refeição" 
              textColor="#1B1D1E"
              onPress={handleDeleteEat}
            />
        </Container>
    )
}