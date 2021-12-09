import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import CreateCliente  from './create/CreateCliente';
import ListCliente  from './list/ListCliente';
import ShowCliente  from './show/ShowCliente';


function Cliente() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ListCliente />} />
                <Route path="cadastro" element={<CreateCliente />} />
                <Route path=":id" element={<ShowCliente />} />
            </Routes>
        </>
    )
}
export default Cliente;