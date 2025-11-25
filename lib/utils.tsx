"use client"

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to convert URLs in text to clickable links
export function linkifyText(text: string): React.ReactNode {
  // Regular expression to match URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g

  // Split text by URLs and create array of text parts and URLs
  const parts = text.split(urlRegex)

  return (
    <>
      {parts.map((part, index) => {
        if (urlRegex.test(part)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {part}
            </a>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </>
  )
}
