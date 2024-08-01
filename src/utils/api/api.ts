export const extractMenuPermissions = (permissions: string[]) => {
    const menuPermissions: string[] = [];
    const pagePermissions: string[] = [];
    // let foundMenu = false;

    for (const permission of permissions) {
        if (permission.startsWith('Menu')) {
            menuPermissions.push(permission);
        } else {
            pagePermissions.push(permission);
        }
    }

    return {
        menuPermissions,
        pagePermissions,
    };
};
