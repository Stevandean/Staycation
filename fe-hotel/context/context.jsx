import React, { createContext, useState } from 'react'
export const globalState = createContext();

function Context ({ children }) {
    const [showModalUser, setShowModalUser] = useState (false)
    const [showModalKamar, setShowModalKamar] = useState (false)
    const [showModalTipeKamar, setShowModalTipeKamar] = useState (false)
    const [showModalDelete, setShowModalDelete] = useState (false)
    const [showModalStatus, setShowModalStatus] = useState (false)
    return (
        <globalState.Provider value={{ showModalUser, setShowModalUser, showModalKamar, setShowModalKamar, showModalTipeKamar, setShowModalTipeKamar, showModalDelete, setShowModalDelete, showModalStatus, setShowModalStatus }}>
            {children}
        </globalState.Provider>
    )
}

export default Context