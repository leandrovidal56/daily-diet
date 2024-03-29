import { SummaryCard } from "@components/SummaryCard";
import { Text } from "@components/Text";
import { useNavigation } from "@react-navigation/native";
import {
  BackButton,
  BackIcon,
  Container,
  Content,
  Percentage,
  Row,
} from "./styles";
import { eatsGetAll } from "@storage/user/userGetEat";
import { useEffect, useState } from "react";

export function Statistics() {
  const navigation = useNavigation();
  const [eatsRegister, setEatsRegister] = useState(0);
  const [eatsGood, setEatsGood] = useState(0);
  const [eatsBad, setEatsBad] = useState(0);
  const [eatsPercentage, setEatsPercentage] = useState(0);
  const [sequence, setSequence] = useState(0);
  const [backgroundGreen, setBackgroundGreen] = useState<boolean | null>(null);

  async function fetchEatAll() {
    try {
      const storage = await eatsGetAll();
      const good = storage.filter((object) => object.diet);
      setEatsGood(good.length);
      const bad = storage.filter((object) => !object.diet);

      setEatsBad(bad.length);

      setEatsRegister(storage.length);
      const eatsPercentageFormatted = (good.length / storage.length) * 100;
      if (eatsPercentageFormatted > 50) {
        setBackgroundGreen(true);
      } else {
        setBackgroundGreen(false);
      }
      setEatsPercentage(eatsPercentageFormatted);
    } catch (error) {
      console.error(error, "dentro do catch");
    }
  }
  async function bestSequencie() {
    const storage = await eatsGetAll();
    let arrayOfBest = [];
    let count = 0;

    storage.map((item) => {
      if (item.diet) {
        ++count;
      }

      if (!item.diet) {
        arrayOfBest.push(count);
        count = 0;
      }

      const insertNewRecord = arrayOfBest.slice(-1);

      if (insertNewRecord > count) {
        setSequence(insertNewRecord);
      }

      if (count > insertNewRecord) {
        arrayOfBest.push(count);
        setSequence(count);
      }
    });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetchEatAll();
    bestSequencie();
  }, []);

  return (
    <Container>
      <Percentage backgroundGreen={backgroundGreen}>
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
        <Text
          title={`${eatsPercentage ? eatsPercentage.toFixed(2) : 0}%`}
          subTitle="das refeições dentro da dieta"
        />
      </Percentage>
      <Content>
        <SummaryCard
          title={sequence}
          subTitle="melhor sequência de pratos dentro da dieta"
        />
        <SummaryCard title={eatsRegister} subTitle="refeições registradas" />
        <Row>
          <SummaryCard
            title={eatsGood}
            subTitle="refeições dentro da dieta"
            small
            background="#E5F0DB"
          />
          <SummaryCard
            title={eatsBad}
            subTitle="refeições fora da dieta"
            small
            background="#F4E6E7"
          />
        </Row>
      </Content>
    </Container>
  );
}
