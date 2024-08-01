import { memo, ReactElement } from 'react';
import { Route, RouteObject, Routes } from 'react-router-dom';

import { isIndexRoute } from '@config/routes';
import { iRouteListProps, RoutePrivate } from '@components/index';

// TODO: check the performance of this and Menu component
function RouteListMemo({
    routes,
    isAuthenticated,
}: iRouteListProps): ReactElement {
    const renderRoutes = (
        routes: RouteObject[],
        parentPath = '',
    ): ReactElement[] => {
        //console.log('routes', isAuthenticated, routes);

        return routes.flatMap(route => {
            const routePath = route.path ? parentPath + route.path : parentPath;

            const element = (
                <RoutePrivate isAuthenticated={isAuthenticated}>
                    {route.element}
                </RoutePrivate>
            );
            //const element = route.element;

            if (route.children) {
                return renderRoutes(route.children, routePath);
            }

            return isIndexRoute(route) ? (
                <Route index element={element} key={routePath} />
            ) : (
                <Route path={routePath} element={element} key={routePath} />
            );
        });
    };

    return <Routes>{renderRoutes(routes)}</Routes>;
}

const RouteList = memo(RouteListMemo);
export default RouteList;
