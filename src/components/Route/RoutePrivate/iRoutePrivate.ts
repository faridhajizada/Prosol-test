import { RouteObject } from 'react-router-dom';
import { ReactNode } from 'react';

export type RoutePrivatePropsType = RouteObject & {
    children?: ReactNode | null;
    isAuthenticated?: boolean;
    redirectTo?: string;
};
