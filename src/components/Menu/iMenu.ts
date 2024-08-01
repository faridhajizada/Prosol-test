import { MenuTheme } from 'antd';
import { ReactNode } from 'react';

export interface iMenuItem {
    name?: string;
    path?: string;
    icon?: ReactNode;
    menuPermission?: string;
}

export interface iMenuProps {
    theme: MenuTheme;
    menuItems: iMenuItem[];
}
