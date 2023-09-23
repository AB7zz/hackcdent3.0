import React, {useContext, createContext} from 'react'
import {useAddress, useMetamask} from '@thirdweb-dev/react'

const StateContext = createContext()

export const StateContextProvider = ({children}) => {
    const address = useAddress()
    const connect = useMetamask()

    return(
        <StateContext.Provider value={{
            connect,
            address
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)