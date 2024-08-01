import style from './FormItem.module.scss';

import cn from 'classnames';
import { Col, Form, Row, Typography } from 'antd';

import { iFormItemProps } from '@components/index';

const { Title } = Typography;

function FormItem({
    children,
    name,
    label,
    level = 5,
    labelStyle,
    className,
    layout = 'vertical',
    loading = false,
    ...rest
}: iFormItemProps) {
    return (
        <Row
            className={cn(
                style.formItem,
                '!flex-nowrap',
                layout === 'horizontal' ? '!flex items-center' : '!flex-col',
                className,
            )}
        >
            <Col>
                <Title
                    level={level}
                    className={cn(
                        '!m-0',
                        { '!mr-5': layout === 'horizontal' },
                        { '!mb-1': layout === 'vertical' },
                        labelStyle,
                    )}
                >
                    {label}
                </Title>
            </Col>

            <Col>
                <Form.Item className="!m-0" name={name} {...rest}>
                    {children}
                </Form.Item>
            </Col>
        </Row>
    );
}

export default FormItem;
