import cn from 'classnames';
import { Button as ButtonAnt } from 'antd';

import { iButtonProps } from '@components/index';

function Button({
    className,
    type = 'primary',
    size = 'large', // TODO: Need to align with the default design UI after tokens will be ready
    ...rest
}: iButtonProps) {
    return (
        <ButtonAnt
            size={size}
            type={type}
            className={cn(
                className,
                'w-full !flex justify-center items-center',
            )}
            {...rest}
        >
            {rest.children}
        </ButtonAnt>
    );
}

export default Button;
