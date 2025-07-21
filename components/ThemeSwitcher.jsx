'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  const buttonStyle = {
    marginLeft: '1rem',
    padding: '0.5rem 0.8rem',
    borderRadius: '0.5rem',
    backgroundColor: isDark ? '#374151' : '#f3f4f6', // dark:hover:bg-gray-700 or light:hover:bg-gray-100
    color: isDark ? '#ffffff' : '#000000',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      style={buttonStyle}
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}
