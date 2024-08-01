export type ColorsType = 'Primary' | 'Info' | 'Error' | 'Warning' | 'Success';

export interface iGetListParams {
    page: number;
    take: number;
}

export interface iGetResponse<T> {
    data: {
        items: T[];
    };
    message: string | null;
}

export interface iGetTransformResponse<T> {
    items: T[];
}

export interface iGetListResponse<T> extends iGetResponse<T> {
    data: iGetResponse<T>['data'] & {
        totalCount: number | null;
    };
}

export interface iGetListTransformResponse<T> extends iGetTransformResponse<T> {
    totalCount: number | null;
}

export interface iGetById<T> {
    data: T;
    message: string | null;
}
