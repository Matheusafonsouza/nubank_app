import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import {
  Content,
  Container,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Annotation,
  Title,
  Description,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 200.000,00</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 10,00 recebida de Matheus Afonso hoje às
              06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
