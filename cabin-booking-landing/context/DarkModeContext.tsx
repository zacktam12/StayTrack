"use client"

import { createContext, useContext, useEffect, type ReactNode } from "react"
import { useLocalStorageState } from "../hooks/useLocalStorageState"

interface DarkModeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

interface DarkModeProviderProps {
  children: ReactNode
}

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false,
    "isDarkMode",
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode((isDark: boolean) => !isDark)
  }

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
}

function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined) throw new Error("DarkModeContext was used outside of DarkModeProvider")
  return context
}

export { DarkModeProvider, useDarkMode }
