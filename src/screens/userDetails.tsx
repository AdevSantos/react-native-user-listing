import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { RouteProp, useRoute } from "@react-navigation/native";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type RootStackParamList = {
  userDetails: { userId: number };
};

type UserDetailsRouteProp = RouteProp<RootStackParamList, "userDetails">;

const UserDetails = () => {
  const route = useRoute<UserDetailsRouteProp>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://reqres.in/api/users/${route.params.userId}`
      );
      const data = await response.json();
      setUser(data.data);
    };

    fetchUser();
  }, [route.params.userId]);

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Avatar source={{ uri: user.avatar }} />
      <Name>
        {user.first_name} {user.last_name}
      </Name>
      <Email>{user.email}</Email>
    </Container>
  );
};

export default UserDetails;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Email = styled.Text`
  font-size: 18px;
  color: #666;
`;
