import {
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';

import { deleteUserStorageData } from '@utils/index';

import { authAPI } from '@store/api/index';

// Recheck the implementation of re-auth with token - https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#automatic-re-authorization-by-extending-fetchbasequery
type CustomBaseQueryFnType = BaseQueryFn<
    FetchArgs,
    unknown,
    FetchBaseQueryError
>;

const baseFetch: CustomBaseQueryFnType = (args, api, extraOptions) =>
    fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL_API,
        credentials: 'include',
    })(args, api, extraOptions);

const baseQueryWithReAuth: CustomBaseQueryFnType = async (
    args,
    api,
    extraOptions,
) => {
    const result = await baseFetch(args, api, extraOptions);
    if (
        result.error &&
        result.error.status === 401 &&
        !args.url.includes('auth')
    ) {
        // Attempt to refresh the token
        try {
            const refreshResult = await api.dispatch(
                authAPI.endpoints.authRefreshToken.initiate(),
            );
            console.log(refreshResult, 'refreshResult');

            if (refreshResult.error) {
                deleteUserStorageData();
                console.log('User is not authorized');
                window.location.href = '/auth/login'; // TODO: should be replaced with React Router redirect?
                //api.dispatch({ type: 'REDIRECT_TO_SIGNUP' });
            } else {
                // Retry initial request
                return baseFetch(args, api, extraOptions);
            }
        } catch (error) {
            console.error(error, 'error');
            //return { error };
        }
    }

    return result;
};

export default baseQueryWithReAuth;
