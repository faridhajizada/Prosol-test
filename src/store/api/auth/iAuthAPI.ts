export interface iAuthAPILogin {
    givenName: string | null;
    familyName: string | null;
    username: string;
    avatarUrl: string | null;
    activeAccountId: string;
    accounts: {
        roleName: string;
        organization: {
            organizationId: string;
            organizationUserId: string;
            organizationLogoUrl: null;
            name: string;
        } | null;
    }[];
    permissions?: string[];
}

export interface iAuthAPISwitchAccountRequest {}

export interface iAuthAPISwitchAccountResponse {}
