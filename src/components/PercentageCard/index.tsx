import { Text } from "@components/Text";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";
import { useEffect, useState } from "react";

type Props = TouchableOpacityProps & {
  percentage: number;
};

export function PercentageCard({ percentage }: Props) {
  const navigation = useNavigation();
  function handleStatistics() {
    navigation.navigate("Statistics");
  }
  const [backgroundGreen, setBackgroundGreen] = useState<boolean | null>(null);
  const [numberFormated, setNumberFormated] = useState("");

  function changeBackground() {
    setNumberFormated(percentage ? `${percentage.toFixed(2)}%` : `0%`);
    if (percentage > 50) {
      setBackgroundGreen(true);
    } else {
      setBackgroundGreen(false);
    }
  }

  useEffect(() => {
    changeBackground();
  }, [percentage]);

  return (
    <Container backgroundGreen={backgroundGreen} onPress={handleStatistics}>
      <Text title={numberFormated} subTitle="das refeições dentro da dieta" />
    </Container>
  );
}
