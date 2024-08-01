import { Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

function AuthLoginContent() {
    return (
        <Col span={24} className="text-center">
            <Title level={1} className="!text-white">
                Welcome back.
            </Title>
            <Paragraph className="lg:px-5 text-center font-medium !text-xl !text-white">
                Log in to access your account and explore our latest features.
            </Paragraph>
        </Col>
    );
}
export default AuthLoginContent;
