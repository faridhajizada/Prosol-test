import ls from 'localstorage-slim';
import { Menu as AntMenu } from 'antd';
import { Link } from 'react-router-dom';
import { ItemType } from 'antd/es/menu/interface';

import { iMenuItem, iMenuProps } from '@components/index';

const suffixes = [
    'Global',
    'Management',
    'OrganizationUser',
    'OrganizationManagement',
];

// TODO: check useMatch hook for active links
function Menu({ theme, menuItems }: iMenuProps) {
    const getMenuPermissions = ls.get('menuPermissions') as string[];

    const items: ItemType[] = menuItems
        .filter(({ menuPermission }: iMenuItem) =>
            menuPermission &&
            getMenuPermissions &&
            getMenuPermissions.length > 0
                ? getMenuPermissions.some(item =>
                      suffixes.some(
                          suffix => item === `${menuPermission}${suffix}`,
                      ),
                  )
                : null,
        )
        .map(({ name, icon, path }: iMenuItem) => ({
            key: `${name}-${path}`,
            icon,
            label: <Link to={`${path}`}>{name}</Link>,
        }));

    return (
        <AntMenu
            theme={theme}
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
            className="sticky top-0"
        />
    );
}

export default Menu;
