import React, { useContext, useEffect } from "react";
import { useState } from "react";

const ContextMessage = React.createContext({
    pokemons: 1126,
    setPokemons: () => {}, 
});

export function MessageProvider(props) {
    const [pokemons, setPokemons] = useState(1126);
    const result = React.useMemo(() => ({
        pokemons, setPokemons
    }), [pokemons]);

    return (
        <ContextMessage.Provider value={result} {...props} />
    )
}

export function Number() {
    const datos = useContext(ContextMessage);
    return datos;
}
