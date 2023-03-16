import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Line } from "@components/Line";
import { PercentageCard } from "@components/PercentageCard";
import { Select } from "@components/Select";
import { SummaryCard } from "@components/SummaryCard";
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Header, Text, Row, BackIcon, BackButton  } from "./styles";

export function NewEat(){
    const navigation = useNavigation();

  function handleFeedBack(){
    navigation.navigate('FeedBack')
  }

  function handleGoBack(){
    navigation.goBack()
  }
    return (
        <Container>
          
            <Header>
              <BackButton onPress={handleGoBack}>
                <BackIcon  />
              </BackButton>
                <Text>Nova refeição</Text>
            </Header>
          
            <Content>
                <Input title="Nome"/>
                <Input title="Descrição" large/>
                <Row>
                    <Input title="Data" small />
                    <Input title="Data" small />
                </Row>
                <Select/>
            </Content>
            <Button title="Cadastrar refeição" onPress={handleFeedBack}/>

        </Container>
    )
}