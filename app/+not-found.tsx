import { Link, Stack } from 'expo-router';
import { Fragment } from 'react';
import { View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <Fragment>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-md font-pregular mb-4">This screen doesn't exist.</Text>
        <Link href="/" className="text-md font-psemibold text-secondary-100 hover:text-primary py-4">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </Fragment>
  );
}
