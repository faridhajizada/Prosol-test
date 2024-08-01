import { LayoutAuth } from '@components/LayoutAuth';
import { AuthLoginContent, AuthLoginForm, iAuthLoginProps } from '@pages/Auth';

function AuthLogin({}: iAuthLoginProps) {
    return (
        <LayoutAuth
            leftSide={<AuthLoginForm />}
            rightSide={<AuthLoginContent />}
        />
    );
}

export default AuthLogin;
