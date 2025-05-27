"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDarkMode } from "../context/DarkModeContext"
import { motion } from "framer-motion"

export function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="relative overflow-hidden">
      <motion.div
        initial={false}
        animate={{
          scale: isDarkMode ? 0 : 1,
          opacity: isDarkMode ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="h-4 w-4" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: isDarkMode ? 1 : 0,
          opacity: isDarkMode ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="h-4 w-4" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
