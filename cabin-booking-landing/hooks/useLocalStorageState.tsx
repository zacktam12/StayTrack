"use client"

import { useState, useEffect } from "react"

export function useLocalStorageState(initialState: any, key: string) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialState

    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialState
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [value, key])

  return [value, setValue]
}
