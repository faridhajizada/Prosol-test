import cn from 'classnames';
import { Input as InputAnt } from 'antd';

import { iInputProps } from '@components/ui';

function Input({ size = 'large', className, ...rest }: iInputProps) {
    return (
        <InputAnt
            autoComplete="off"
            className={cn('w-full', className)}
            size={size}
            {...rest}
        />
    );
}

export default Input;
