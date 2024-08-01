import Cookies from 'js-cookie';
import { MenuTheme } from 'antd';
import ls from 'localstorage-slim';

export const getCookie = (name: string): string | undefined =>
    Cookies.get(name);

export const setCookie = (
    name: string,
    value: string,
    options?: Cookies.CookieAttributes,
): void => {
    Cookies.set(name, value, options);
};

export const getTheme = (): MenuTheme => {
    const theme = Cookies.get('theme');
    if (theme) {
        return theme as MenuTheme;
    }
    Cookies.set('theme', 'dark');
    return 'dark';
};

/**
 * If cookie exists, return true, else set cookie and return false
 * @param name
 * @param value
 * @returns boolean
 */
export const getOrSetCookie = (name: string, value: string): boolean => {
    if (getCookie(name)) {
        return true;
    }
    Cookies.set(name, value);
    return false;
};

export const deleteUserStorageData = (): void => {
    ls.set('userData', null);
    ls.set('menuPermissions', null);
    ls.set('pagePermissions', null);
    ls.set('activeRole', null);
};
