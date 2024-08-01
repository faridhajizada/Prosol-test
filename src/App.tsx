import { useAppSelector } from '@hooks/index';
import { Config, Layout } from '@components/index';

function App() {
    const theme = useAppSelector(state => state.global.theme);

    return (
        <Config theme={theme}>
            <Layout theme={theme}/>
        </Config>
    );
}

export default App;
