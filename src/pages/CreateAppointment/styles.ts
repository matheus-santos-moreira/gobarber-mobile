import styled from 'styled-components/native';
import { Platform, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';
import { Provider } from './index';

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 24 : 24}px;
  background: #28262e;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  margin-left: 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const UserAvatar = styled.Image`
  background: #423f4d;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: auto;
`;

export const ProviderListContainer = styled.View`
  height: 112px;
`;

export const ProviderList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  height: 48px;
  background: ${props => (props.selected ? '#ff9000' : '#3E3B47')};
  padding: 8px 12px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`;

export const ProviderAvatar = styled.Image`
  background: #423f4d;

  height: 32px;
  width: 32px;
  border-radius: 16px;
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  font-family: 'RobotoSlab-Medium';
  color: ${props => (props.selected ? '#232129' : ' #f4ede8')};
  font-size: 16px;
  margin-left: 8px;
`;
