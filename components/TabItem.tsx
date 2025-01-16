import { Fragment } from "react";
import { Image, Text, ImageSourcePropType } from "react-native";

function TabIcon({ iconUrl, color }: { iconUrl: string; color: string }) {
  return (
    <Fragment>
      <Image
        source={iconUrl as ImageSourcePropType}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6 mb-2"
      />
    </Fragment>
  );
}

function TabLabel({ color, text, focused }: { text: string; focused: boolean; color: string }) {
  return (
    <Text
      className={`text-xs ${focused ? 'font-psemibold' : 'font-pregular'}`}
      style={{ color }}
    >
      {text}
    </Text>
  );
}

export { TabIcon, TabLabel };
