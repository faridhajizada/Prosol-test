import cn from 'classnames';
import { Col, Row } from 'antd';

import { iLayoutAuthProps } from '@components/index';

function LayoutAuth({ leftSide, rightSide, className }: iLayoutAuthProps) {
    return (
        <>
            <Row className={cn(className, '!h-full min-h-screen')}>
                <Col
                    span={24}
                    lg={12}
                    className="!flex justify-center items-center p-14 lg:!p-0"
                >
                    <Row className="w-96">{leftSide}</Row>
                </Col>

                <Col
                    span={0}
                    lg={12}
                    className={`lg:!flex justify-center items-center bg-[url(@assets/authGradient.svg)] bg-no-repeat bg-cover`}
                >
                    <Row className="w-[664px] h-full items-center !px-8">
                        {rightSide}
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default LayoutAuth;
