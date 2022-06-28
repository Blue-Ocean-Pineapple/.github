import { React, createContext, useEffect } from 'react';

const RoleContext = createContext({});

export const RoleProvider = ({children}) => {

  useEffect(() => {
   // check current user logged in and their role
  })
  return (
    <RoleContext.Provider
    value={{
      role: "staff"
    }}>
      {children}
    </RoleContext.Provider>
  )
}