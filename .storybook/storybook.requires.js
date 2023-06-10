/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./modules",
    files: "**/*.stories.mdx",
    importPathMatcher:
      "^\\.[\\\\/](?:modules(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$",
  },
  {
    titlePrefix: "",
    directory: "./modules",
    files: "**/*.stories.@(js|jsx|ts|tsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:modules(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./modules/app/navigation/BottomTabNavigator.stories.tsx": require("../modules/app/navigation/BottomTabNavigator.stories.tsx"),
    "./modules/post/components/card/Card.stories.tsx": require("../modules/post/components/card/Card.stories.tsx"),
    "./modules/post/components/card/display/BottomHeading.stories.tsx": require("../modules/post/components/card/display/BottomHeading.stories.tsx"),
    "./modules/post/components/card/display/Display.stories.tsx": require("../modules/post/components/card/display/Display.stories.tsx"),
    "./modules/post/components/card/display/TopHeading.stories.tsx": require("../modules/post/components/card/display/TopHeading.stories.tsx"),
    "./modules/post/components/card/thumbnail/Thumbnail.stories.tsx": require("../modules/post/components/card/thumbnail/Thumbnail.stories.tsx"),
    "./modules/shared/components/font/Font.stories.tsx": require("../modules/shared/components/font/Font.stories.tsx"),
    "./modules/shared/components/menu/Menu.stories.tsx": require("../modules/shared/components/menu/Menu.stories.tsx"),
  };
};

configure(getStories, module, false);
