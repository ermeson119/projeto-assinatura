import './Form.css'
import React, { useState } from "react";

export default function Form() {

    const [formData, setFormData] = useState({
        ordem: "",
        processo: "",
        interessado: "",
        setor: "",
        tipoDocumento: "",
        valor: "",
        sgd: "",
        providencia: "",
    });

    // Função para lidar com a mudança nos inputs
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Função para lidar com a submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulário submetidos:", formData);
        // Aqui você pode enviar os dados para o back-end ou API
    };
    return (

        <div className="container mt-5">
            <h2 className="text-center">Formulário de Registro de Execução Orçamentária e Financeira</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="ordem" className="form-label">Ordem</label>
                        <input
                            type="number"
                            className="form-control"
                            id="ordem"
                            value={formData.ordem}
                            onChange={handleChange}
                            placeholder="Digite a ordem"
                            required
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="processo" className="form-label">Processo</label>
                        <input
                            type="text"
                            className="form-control"
                            id="processo"
                            value={formData.processo}
                            onChange={handleChange}
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
                            type="number"
                            step="0.01"
                            className="form-control"
                            id="valor"
                            value={formData.valor}
                            onChange={handleChange}
                            placeholder="Digite o valor em R$"
                            required
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
                        <label htmlFor="providencia" className="form-label">Providência</label>
                        <input
                            type="text"
                            className="form-control"
                            id="providencia"
                            value={formData.providencia}
                            onChange={handleChange}
                            placeholder="Digite a providência"
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Adicionar no Relátorio</button>
            </form>
        </div>




    )
}