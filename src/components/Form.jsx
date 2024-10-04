import './Form.css'
import React, { useState } from "react";
import '../App.css';

export default function Form() {

    const [formData, setFormData] = useState({
        processo: "",
        interessado: "",
        setor: "",
        tipoDocumento: "",
        valor: "",
        sgd: "",
        providencia: "",
    });

    const [registros, setRegistros] = useState([]);

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === "valor") {
            const formattedValue = formatCurrency(value);
            setFormData((prevData) => ({
                ...prevData,
                [id]: formattedValue,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [id]: value,
            }));
        }
    };

    const formatCurrency = (value) => {
        const numericValue = value.replace(/\D/g, '');
        const formattedValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        }).format(numericValue / 100);
        return formattedValue;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedFormData = {
            ...formData,
            processo: formData.processo === "" ? "***" : formData.processo,
            valor: formData.valor === "" ? "***" : formData.valor,
        };

        setRegistros((prevRegistros) => [...prevRegistros, updatedFormData]);

        setFormData({
            processo: "",
            interessado: "",
            setor: "",
            tipoDocumento: "",
            valor: "",
            sgd: "",
            providencia: "",
        });
    };

    const handleProcessoChange = (e) => {
        let { value } = e.target;

        value = value.replace(/\D/g, '');

        if (value.length > 4) {
            value = value.slice(0, 4) + '/' + value.slice(4);
        }
        if (value.length > 10) {
            value = value.slice(0, 10) + '/' + value.slice(10, 16);
        }

        setFormData((prevData) => ({
            ...prevData,
            processo: value,
        }));
    };

    return (
        <div>
            <div className="container mt-5 caixa shadow">
                <h2 className="text-center fw-bold" id='text-formulario'>Formulário de Registro de Execução Orçamentária e Financeira</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="processo" className="form-label">Processo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="processo"
                                value={formData.processo}
                                onChange={handleProcessoChange}
                                placeholder="Digite o número do processo"
                                required
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="interessado" className="form-label">Interessado</label>
                            <input
                                type="text"
                                className="form-control"
                                id="interessado"
                                value={formData.interessado}
                                onChange={handleChange}
                                placeholder="Digite o interessado"
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="setor" className="form-label">Setor</label>
                            <input
                                type="text"
                                className="form-control"
                                id="setor"
                                value={formData.setor}
                                onChange={handleChange}
                                placeholder="Digite o setor"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tipoDocumento" className="form-label">Tipo de Documento/Assunto</label>
                        <textarea
                            className="form-control"
                            id="tipoDocumento"
                            rows="3"
                            value={formData.tipoDocumento}
                            onChange={handleChange}
                            placeholder="Descreva o tipo de documento ou assunto"
                            required
                        ></textarea>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="valor" className="form-label">Valor (R$)</label>
                            <input
                                type="text"
                                className="form-control"
                                id="valor"
                                value={formData.valor}
                                onChange={handleChange}
                                placeholder="Digite o valor em R$"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="sgd" className="form-label">SGD P Assinatura</label>
                            <input
                                type="text"
                                className="form-control"
                                id="sgd"
                                value={formData.sgd}
                                onChange={handleChange}
                                placeholder="Digite o SGD P Assinatura"
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="providencia" className="form-label">Tipo de Assinatura</label>
                            <select
                                className="form-control"
                                id="providencia"
                                value={formData.providencia}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecione</option>
                                <option value="Assinar">ASSINAR</option>
                                <option value="Assinar-com-token">ASSINAR COM TOKEN</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Adicionar no Relatório</button>
                </form>
            </div>
            {registros.length > 0 && (
                <div className="container mt-5 caixa shadow">
                    <h3 className="text-center mt-3 fw-bold">Relatório de Registros</h3>
                    <table className="table table-bordered mt-5" id='tabela'>
                        <thead>
                            <tr>
                                <th>Processo</th>
                                <th>Interessado</th>
                                <th>Setor</th>
                                <th>Tipo de Documento/Assunto</th>
                                <th>Valor (R$)</th>
                                <th>SGD P Assinatura</th>
                                <th>Providência</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registros.map((registro, index) => (
                                <tr key={index}>
                                    <td>{registro.processo}</td>
                                    <td>{registro.interessado}</td>
                                    <td>{registro.setor}</td>
                                    <td>{registro.tipoDocumento}</td>
                                    <td className='text-center'>{registro.valor}</td>
                                    <td>{registro.sgd}</td>
                                    <td>{registro.providencia}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mx-4 mt-3">
                        <button  className="btn btn-primary mt-3">Enviar Relatório</button>
                    </div>
                </div>
            )}
        </div>

    );
}
