import React, { useEffect, useState } from 'react';
import clienteService from "../../../services/cliente.service";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function ListCliente() {

    const [clientes, setClientes] = useState([] as any);
    useEffect(() => {
        listClientes();
    }, []);
    
    const listClientes = () => {
        clienteService.list().then(
            (response : any) => {
                setClientes(response);
            }
        );
    };

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Lista de Clientes</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link className="btn btn-sm btn-outline-primary" to="/cliente/cadastro">Criar Cliente</Link>
                    </div>
                </div>
                <h2>Section title</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">CPF</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                        {clientes.length > 0 && clientes.map((cliente : any) => 
                            <tr>
                                <td>{cliente.id}</td>
                                <td>{cliente.user.name}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.endereco}</td>
                                <td>{cliente.user.email}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}
export default ListCliente;