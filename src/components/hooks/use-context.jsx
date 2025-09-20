import React, { createContext } from 'react'
import '../App.css'
import ChildA from './ChildA';


//step1:create Context
const UserContext = createContext();
//step2: wrap all the child inside a provider

const useContext = () => {
  return (
    <UserContext.Provider>
        <ChildA/>
    </UserContext.Provider>
  )
}

export default useContext