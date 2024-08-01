import { ThemeConfig } from 'antd';

import {
    GenerateColorReturnType,
    iGenerateColorUtilParams,
} from '@utils/general';

export type UseTokenRelatedReturnType = [
    token: ThemeConfig['token'],
    {
        generateColor: (
            params: iGenerateColorUtilParams,
        ) => GenerateColorReturnType;
    },
];
