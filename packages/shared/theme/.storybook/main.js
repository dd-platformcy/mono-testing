import { addDecorator, configure } from '@storybook/react';

import PlatformTheme from '../platformTheme';
import DarkTheme from '../src/themes/dark-theme';

const themes = [PlatformTheme];
addDecorator(withThemesProvider(themes));

// automatically import all files ending in *.stories.js
configure(require.context('../components/', true, /\.stories\.tsx$/), module);
