import {createBrowserRouter} from 'react-router-dom';
import MontarPlano from "./views/MontarPlano.jsx"
import NotFound from "./views/NotFound.jsx"
import Empresa from "./views/Empresa.jsx"
import Administracao from "./views/Administracao.jsx"
import Endereco from "./views/Endereco.jsx"
import Fim from "./views/Fim.jsx"

const router = createBrowserRouter([
{
    path: "/",
    element: <MontarPlano />
},
{
    path: "*",
    element: <NotFound />
},
{
    path: "/empresa",
    element: <Empresa />
},
{
    path: "/administracao",
    element: <Administracao />
},
{
    path: "/endereco",
    element: <Endereco />
},
{
    path: "/fim",
    element: <Fim />
},
]);

export default router;