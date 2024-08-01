import { theme } from 'antd';

import { generateColor } from '@utils/general';
import { UseTokenRelatedReturnType } from '@hooks/index';

const { useToken: useTokenAnt } = theme;

const useTokenRelated = (): UseTokenRelatedReturnType => {
    const { token } = useTokenAnt();

    return [token, { generateColor }];
};

export default useTokenRelated;
