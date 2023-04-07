import { Button } from "@components/Button";
import { HeaderBackButton } from "@components/HeaderBackButton";
import { Status } from "@components/Status";
import { useNavigation } from "@react-navigation/native";
import { eatDeleteByUser } from "@storage/user/userDeleteEat";


import { Container, Content, Data, DateText, Text, Title  } from "./styles";

type Props = {
  route: {
    params: {
      eat: string;
      description: string;
      date: string;
      time: string;
      diet: boolean;
    }
  };
}

export function Eat({ route }: Props) {
    const navigation = useNavigation();
    function handleEditEat(){
      navigation.navigate('EditEat', route.params)
    }
    async function  handleDeleteEat(){
      await eatDeleteByUser(route.params)
      navigation.navigate('Home');
    }  

    return (
        <Container>
            <HeaderBackButton title ="Refeição"/>
            <Content>
                <Title>{route.params.eat}</Title>
                <Text>
                    {route.params.description}
                </Text>
                <Data>Data e hora</Data>
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
