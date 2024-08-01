import {
    Card,
    Col,
    Form,
    Image,
    Layout as LayoutAnt,
    Row,
    Space,
    Typography,
} from 'antd';
import cn from 'classnames';
import { BsBoxArrowLeft } from 'react-icons/bs';

import {
    FormItem,
    iLayoutProps,
    Menu,
    RouteList,
    Select,
} from '@components/index';
import { useAppSelector } from '@hooks/index';
import { routesAndMenuItems } from '@config/routes';
import { processRoutesAndMenuItems } from '@utils/index';

import { useAuthLogoutMutation } from '@store/api';
import { Content } from 'antd/es/layout/layout';

const { Text } = Typography;
const { Sider } = LayoutAnt;

function Layout({ theme }: iLayoutProps) {
    const user = useAppSelector(state => state.global.user);

    const [logout] = useAuthLogoutMutation();

    const { routes, menuItems } = processRoutesAndMenuItems(routesAndMenuItems);

    const handleLogout = async () => await logout();

    return (
        <LayoutAnt className="!min-h-screen">
            <>
                {!user && <RouteList routes={routes} isAuthenticated={false} />}

                {user && (
                    <Sider
                        trigger={null}
                        className="min-h-screen hidden lg:block"
                        theme={theme}
                    >
                        <Menu theme={theme} menuItems={menuItems} />

                        <Card
                            className={cn(
                                '!fixed bottom-5 left-1 !p-2 !border-none w-48',
                            )}
                        >
                            <Row className="!flex items-center !justify-between">
                                <Col>
                                    <Image
                                        src=""
                                        width={36}
                                        height={36}
                                        className="!object-cover rounded-full"
                                        preview={false}
                                    />
                                </Col>

                                <Col className="flex-1 ml-2">
                                    <Space className="!flex items-end justify-between">
                                        <Text className="font-medium !text-xs">
                                            name
                                        </Text>

                                        <BsBoxArrowLeft
                                            size={18}
                                            onClick={handleLogout}
                                            className="cursor-pointer"
                                            title="Logout"
                                        />
                                    </Space>

                                    <Form>
                                        <FormItem name="role">
                                            <Select
                                                size="small"
                                                popupClassName="!w-36"
                                                dropdownAlign={{
                                                    points: ['tl', 'bl'],
                                                    offset: [0, 40],
                                                }}
                                            />
                                        </FormItem>
                                    </Form>
                                </Col>
                            </Row>
                        </Card>
                    </Sider>
                )}

                {user && (
                    <Content>
                        <h1>hello world</h1>
                    </Content>
                )}
            </>
        </LayoutAnt>
    );
}

export default Layout;
