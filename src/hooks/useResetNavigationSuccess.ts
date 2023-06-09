import {RootStackParamList} from '../routes/Routes';
import {useNavigation} from '@react-navigation/native';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: RootStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }

  return {reset};
}
