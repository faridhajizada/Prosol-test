import ls from 'localstorage-slim';
import { createApi } from '@reduxjs/toolkit/query/react';

import { iGetById } from '@config/globalTypes';
import { deleteUserStorageData, extractMenuPermissions } from '@utils/index';

import {
    iAuthAPILogin,
    iAuthAPISwitchAccountRequest,
    iAuthAPISwitchAccountResponse,
} from '@store/api';
import baseQueryWithReAuth from '@store/api/baseQueryWithReAuth';

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: baseQueryWithReAuth,
    tagTypes: ['Auth'],
    endpoints(builder) {
        return {
            authLogin: builder.mutation({
                query: ({ email, password }) => ({
                    url: '/auth/login',
                    method: 'POST',
                    body: { email, password },
                }),
                transformResponse: (response: iGetById<iAuthAPILogin>) => {
                    (response.data.permissions as string[]).sort();
                    const { menuPermissions, pagePermissions } =
                        extractMenuPermissions(
                            response.data.permissions as string[],
                        );

                    delete response.data.permissions;
                    ls.set('activeRole', response.data.activeAccountId);
                    ls.set('userData', response.data);
                    ls.set('menuPermissions', menuPermissions);
                    ls.set('pagePermissions', pagePermissions);

                    return response;
                },
            }),
            authRefreshToken: builder.mutation<string, void>({
                query: () => ({
                    url: '/auth/refresh-token',
                    method: 'POST',
                }),
            }),
            authLogout: builder.mutation<void, void>({
                query: () => ({
                    url: '/auth/logout',
                    method: 'POST',
                }),
                transformResponse: () => {
                    deleteUserStorageData();
                    window.location.href = '/auth/login';
                },
                // Response from the server fails, because token is expired
                transformErrorResponse: () => deleteUserStorageData(),
            }),
            authSwitchAccount: builder.mutation<
                iAuthAPISwitchAccountResponse,
                iAuthAPISwitchAccountRequest
            >({
                query: (data: iAuthAPISwitchAccountRequest) => ({
                    url: '/auth/switch-to-account',
                    method: 'POST',
                    body: data,
                }),
                transformResponse: (
                    response: iGetById<iAuthAPISwitchAccountResponse>,
                ): iAuthAPISwitchAccountResponse => {},
            }),
			
			/*
			// authSwitchAccount body structure
			{
			  "roleName": "string",
			  "organization": {
				"organizationId": "string",
				"organizationUserId": "string",
				"organizationLogoUrl": "string",
				"name": "string"
			  }
			}
			
			*/
        };
    },
});

export const {
    useAuthLoginMutation,
    useAuthLogoutMutation,
    useAuthRefreshTokenMutation,
    useAuthSwitchAccountMutation,
} = authAPI;
