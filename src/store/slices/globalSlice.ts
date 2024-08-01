import { MenuTheme } from 'antd';
import ls from 'localstorage-slim';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getTheme, setCookie } from '@utils/index';

import { authAPI } from '@store/api';

export interface GlobalSliceState {
    // TODO: probably need create interface for user
    user: {
        username: string;
        familyName: string;
        givenName: string;
        avatarUrl: string | null;
        activeAccountId: string;
        accounts: {
            roleName: string;
            organization: {
                name: string;
                organizationId: string;
                organizationLogoUrl: string;
                organizationUserId: string;
            } | null;
            activeAccountId?: string;
        }[];
    };
    menuPermissions: string[];
    theme: MenuTheme;
    loading: boolean; // TODO: remove after API will be added
    redirectURL: string;
    splitView?: boolean;
}

const initialState: GlobalSliceState = {
    theme: getTheme() as MenuTheme,
    user: ls.get('userData') as GlobalSliceState['user'], // TODO: check this logic after all API will be added
    menuPermissions: [],
    loading: false, // TODO: remove after API will be added
    redirectURL: '',
    splitView: false,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        toggleTheme: state => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            setCookie('theme', state.theme);
        },
        // TODO: remove after API will be fully implemented
        toggleLoading: (state, action: { payload: boolean }) => {
            state.loading = action.payload;
        },
        setRedirectURL: (state, action: { payload: string }) => {
            state.redirectURL = action.payload;
        },
        setSplitView: (state, action: PayloadAction<boolean>) => {
            state.splitView = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addMatcher(
            authAPI.endpoints.authLogin.matchFulfilled,
            (state, action) => {
                const { familyName, givenName, username, avatarUrl, accounts } =
                    action.payload.data;
                state.user = {
                    familyName,
                    givenName,
                    username,
                    avatarUrl,
                    accounts,
                } as GlobalSliceState['user'];
            },
        );
    },
});

export const { setRedirectURL, toggleTheme, toggleLoading, setSplitView } =
    globalSlice.actions;
export default globalSlice.reducer;
