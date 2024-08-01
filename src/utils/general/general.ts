import { RouteObject } from 'react-router-dom';

import {
    GenerateColorReturnType,
    iGenerateColorUtilParams,
} from '@utils/index';
import { iMenuItem } from '@components/index';
import { routesAndMenuItemsType } from '@config/routes';

export function generateColor({
    type,
    token,
}: iGenerateColorUtilParams): GenerateColorReturnType {
    const color = `color${type}` as keyof typeof token;
    const backgroundColor = `color${type}Bg` as keyof typeof token;
    const borderColor = `color${type}Border` as keyof typeof token;

    return {
        color: token?.[color],
        backgroundColor: token?.[backgroundColor],
        borderColor: token?.[borderColor],
    };
}

/**
 * Process routes and menu items recursively
 * @param routesAndMenuItems
 * @param basePath
 * @returns { routes: RouteObject[], menuItems: iMenuItem[] }
 */
export function processRoutesAndMenuItems(
    routesAndMenuItems: routesAndMenuItemsType[],
    basePath = '',
): { routes: RouteObject[]; menuItems: iMenuItem[] } {
    const menuItems: iMenuItem[] = []; // Only for parent (top-level) items
    const routesArray: RouteObject[] = [];

    routesAndMenuItems.forEach(route => {
        // Handle child objects with 'index' property
        const newPath =
            route.path === '/' ? basePath : `${basePath}/${route.path}`;

        // Add top-level items to the menu with the correct path
        if (!basePath) {
            const menuItem: iMenuItem = {
                name: route.name,
                path: route.path,
                icon: route.icon,
                menuPermission: route.menuPermission,
            };
            menuItems.push(menuItem);
        }

        if (route.children) {
            const { routes: childRoutes } = processRoutesAndMenuItems(
                route.children,
                newPath,
            );
            routesArray.push(...childRoutes);
        } else {
            const actualPath = route.path ? newPath : basePath ? basePath : '/';
            routesArray.push({ path: actualPath, element: route.element });
        }
    });

    return { routes: routesArray, menuItems };
}

export const truncate = (text: string, count: number) =>
    text?.length > count ? `${text.substring(0, count)}...` : text;
