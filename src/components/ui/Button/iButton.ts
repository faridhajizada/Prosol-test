import { ButtonProps } from 'antd/lib';

import { ColorsType } from '@config/globalTypes';

export interface iButtonProps extends ButtonProps {
    colorType?: ColorsType;
}
