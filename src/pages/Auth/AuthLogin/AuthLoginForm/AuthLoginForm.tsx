import { Link, useNavigate } from 'react-router-dom';
import { Col, Form, Input as InputAnt, Typography } from 'antd';

import { useTokenRelated } from '@hooks/index';
import { Button, FormItem, Input } from '@components/index';

import { useAuthLoginMutation } from '@store/api';

const { Text } = Typography;
const { Password } = InputAnt;

function AuthLoginForm() {
    const navigate = useNavigate();
    const [token] = useTokenRelated();
    const [login] = useAuthLoginMutation();

    const handleSubmit = async (values: unknown) => {
        const result = await login(values);
        if (result.data) {
            navigate('/');
        }
    };

    return (
        <Col span={24}>
            <Form onFinish={handleSubmit} autoComplete="off" className="!mb-3">
                <FormItem name="email" label="Email" className="mb-6">
                    <Input placeholder="Enter your email" />
                </FormItem>

                <FormItem name="password" label="Password">
                    <Password placeholder="Enter your password" size="large" />
                </FormItem>

                <Text className="flex !justify-end !text-sm !mb-5 mt-1">
                    <Link to="forgot-password">Forgot password?</Link>
                </Text>

                <Button htmlType="submit">Sign In</Button>
            </Form>

            {/*<Divider className="!my-10">or</Divider>*/}

            {/*<Button*/}
            {/*    type="default"*/}
            {/*    icon={<Image src={googleLogo} preview={false} />}*/}
            {/*    className="!flex items-center justify-center mb-6"*/}
            {/*>*/}
            {/*    Log In with Google*/}
            {/*</Button>*/}

            <Text className="flex justify-center gap-1">
                Don’t you have an account?
                <Link
                    to="/auth/sign-up"
                    style={{ color: token?.colorPrimaryText }}
                >
                    Sign up
                </Link>
            </Text>
        </Col>
    );
}

export default AuthLoginForm;
