import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

const SignIn: React.FC = () => {
  const {signed, signIn} = useAuth();

  async function handleSignIn() {
    await signIn();
  }

  return (
    <View>
      <Text>Logado: {signed ? 'Sim' : 'Não'}</Text>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
