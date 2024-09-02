import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const data = await response.json();
      setUsers(data.data);
    };

    fetchUsers();
  }, []);

  const renderItem = ({ item }: { item: User }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("userDetails", { userId: item.id })}
    >
      <UserContainer>
        <Avatar source={{ uri: item.avatar }} />
        <Info>
          <Name>
            {item.first_name} {item.last_name}
          </Name>
          <Email>{item.email}</Email>
        </Info>
      </UserContainer>
    </TouchableOpacity>
  );

  return (
    <Container>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

export default Home;

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const UserContainer = styled.View`
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const Info = styled.View`
  margin-left: 10px;
  justify-content: center;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Email = styled.Text`
  font-size: 14px;
  color: #666;
`;
