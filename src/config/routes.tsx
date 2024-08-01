import { UserOutlined } from '@ant-design/icons';

import { IndexRouteObject, RouteObject } from 'react-router-dom';

import { Auth, AuthLogin } from '@pages/index';
import { iMenuItem } from '@components/Menu';

export type ChildItem = RouteObject & iMenuItem;

// Type guards
export function isIndexRoute(
    route: ChildItem,
): route is IndexRouteObject & iMenuItem {
    return route.index === true;
}

// Modify the type of routesAndMenuItems to allow children to be optional
export type routesAndMenuItemsType = RouteObject &
    iMenuItem & {
        children?: ChildItem[];
    };

export const routesAndMenuItems: routesAndMenuItemsType[] = [
    {
        name: 'Not Found',
        path: '*',
        element: <div>Not Found</div>,
    },
    {
        name: 'Auth',
        path: 'auth',
        element: <Auth />,
        icon: <UserOutlined />,
        children: [
            {
                index: true,
                path: 'login',
                element: <AuthLogin />,
                icon: <UserOutlined />,
            },
        ],
    },
];
