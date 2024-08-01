import cn from 'classnames';
import { Select as SelectAnt } from 'antd';

import { iSelectProps } from './iSelect';

function Select({
    placeholder = 'Please select',
    suffixIcon,
    className,
    ...rest
}: iSelectProps) {
    let multipleSelectProps;
    if (rest.mode && rest.mode === 'multiple') {
        multipleSelectProps = {
            allowClear: true,
        };
    }

    return (
        <SelectAnt
            size="large"
            placeholder={placeholder}
            suffixIcon={suffixIcon}
            className={cn(className, 'w-full')}
            {...rest}
            {...multipleSelectProps}
        />
    );
}

export default Select;
