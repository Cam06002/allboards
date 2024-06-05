'use client'

import { createContext, useState } from "react";

export type AuthContent = {
  cart: any,
  setCart: any
}

export const AuthContext = createContext<AuthContent | null>(null);

export function AuthProvider({children}:{children:any}){
  const [cart, setCart] = useState<any>();

  return <AuthContext.Provider value={{
    cart,
    setCart
  }}>{children}</AuthContext.Provider>
}