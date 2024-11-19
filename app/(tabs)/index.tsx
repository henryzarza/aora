import { Image, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100 gap-4 p-4">
      <View className='bg-slate-900 mb-3'>
        <Image
          source={require('@/assets/images/logo.png')}
          className='h-20 w-72'
        />
      </View>
      <Text className="text-primary text-3xl font-pextrabold">Primary Text</Text>
      <Text className="text-secondary text-xl font-pregular">Secondary Text</Text>
    </View>
  );
}
