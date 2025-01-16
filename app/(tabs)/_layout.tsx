import { Tabs } from 'expo-router';

import { ROUTES } from '@/constants';
import { TabIcon, TabLabel } from '@/components/TabItem';

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84
        }
      }}>
      {ROUTES.map((route) => (
        <Tabs.Screen
          key={route.name}
          name={route.name}
          options={{
            tabBarIcon: ({ color }) => <TabIcon iconUrl={route.iconUrl} color={color} />,
            tabBarLabel: ({ focused, color }) => (
              <TabLabel color={color} focused={focused} text={route.label} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

export default TabsLayout;
