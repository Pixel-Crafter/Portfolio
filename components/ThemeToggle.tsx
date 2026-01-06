"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-16 h-8 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
        >
            {/* Toggle circle */}
            <div
                className={`absolute left-1 w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300 ${
                    theme === "dark" ? "translate-x-8" : "translate-x-0"
                }`}
            />
            {/* Optional icons */}
            <span className="absolute left-1 text-xs text-yellow-400">{theme === "dark" ? "🌙" : ""}</span>
            <span className="absolute right-1 text-xs text-yellow-500">{theme === "dark" ? "" : "☀️"}</span>
        </button>
    )
}