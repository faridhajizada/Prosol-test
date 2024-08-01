import { ThemeConfig } from 'antd';

import { ColorsType } from '@config/globalTypes';

type GenerateColorStyleKeysType = 'color' | 'backgroundColor' | 'borderColor';

export type GenerateColorReturnType = Record<
    GenerateColorStyleKeysType,
    string | undefined
>;

export interface iGenerateColorUtilParams {
    type: ColorsType;
    token: ThemeConfig['token'];
}
