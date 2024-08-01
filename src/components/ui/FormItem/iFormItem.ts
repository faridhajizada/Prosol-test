import { ReactNode } from 'react';
import { FormItemProps } from 'antd';
import { AutoSizeType } from 'rc-textarea/lib/interface';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { TitleProps } from 'antd/es/typography/Title';

export interface iFormItemProps extends FormItemProps {
    children: ReactNode;
    level?: TitleProps['level'];
    className?: string;
    labelStyle?: string;
    layout?: 'horizontal' | 'vertical';
    loading?: boolean;
}

interface iFormItemConfig {
    textarea: {
        autoSize: AutoSizeType;
        size: SizeType;
    };
    input: {}; // TODO: add input and other element configs
}

export const FormItemConfig: iFormItemConfig = {
    textarea: {
        size: 'large',
        autoSize: { minRows: 4, maxRows: 4 },
    },
    input: {},
};
