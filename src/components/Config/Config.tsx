import { ConfigProvider, ThemeConfig } from 'antd';

import { iConfigProps } from '@components/Config';
import { darkTheme, lightTheme } from '@config/theme';

// TODO: Maybe need remove as a component and use directly in App.tsx. Check it after Auth will be ready
function Config({ children, theme }: iConfigProps) {
    const themeToken: ThemeConfig = theme === 'light' ? lightTheme : darkTheme; // here darkTheme is used as a default and fallback theme

    return <ConfigProvider theme={themeToken}>{children}</ConfigProvider>;
}

export default Config;
