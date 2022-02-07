import React, { useState, useContext, useEffect } from "react";

const Context = React.createContext();

export default function UsuarioContext({children}){
	const [usuario, setUsuario] = useState({});

	return (
		<Context.Provider value = {{usuario, setUsuario}}>
			{children}
		</Context.Provider>
	);
}

export function useUsuarioContext(){
	return useContext(Context)
}