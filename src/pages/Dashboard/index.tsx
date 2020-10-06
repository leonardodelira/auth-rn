import React from 'react';
import {View, Button, Text} from 'react-native';
import {useAuth} from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const {user, signOut} = useAuth();

  async function handleSignOut() {
    await signOut();
  }

  return (
    <View>
      <View>
        <Text>{user?.name}</Text>
      </View>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
