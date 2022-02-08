import React, { useState, useContext, useEffect } from "react";

const Context = React.createContext();

export default function UsuarioContext({children}){
	const [usuario, setUsuario] = useState({});

	useEffect(() => {
		let use = sessionStorage.getItem("usuario");

		if(use !== null){
			setUsuario(JSON.parse(use))
		}
	},[]);

	useEffect(() => {
		sessionStorage.setItem("usuario", JSON.stringify(usuario));
	},[usuario]);

	return (
		<Context.Provider value = {{usuario, setUsuario}}>
			{children}
		</Context.Provider>
	);
}

export function useUsuarioContext(){
	return useContext(Context)
}