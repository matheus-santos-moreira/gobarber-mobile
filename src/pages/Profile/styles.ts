import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 30px 30px ${Platform.OS === 'android' ? 100 : 40}px;
  position: relative;
`;

export const ActionsButton = styled.View`
  margin-top: 40px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const LogoutButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  background: #423f4d;
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
