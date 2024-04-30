import React, { useEffect, useState } from "react";

export const TodoListAPI = () => {
    const [usuarios, setUsuarios] = useState([]);

    const spinner = <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>

    async function traerUsuarios() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsuarios(data);
    };

    useEffect(() => {
        traerUsuarios();
    }, []);

    return (
        <div className="container text-center">
            {!traerUsuarios ? spinner : <ul className="list-group">
                {usuarios.map((item) => (
                    <li key={item.id} className="list-group-item">{item.name}</li>
                ))}
            </ul>}
        </div>
    );
};