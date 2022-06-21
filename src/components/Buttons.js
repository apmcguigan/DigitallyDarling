import React from "react"
import { Link } from "gatsby"

export const PrimaryButton = ({ children, className, ...rest }) => {
  return (
    <Link
      {...rest}
      className={`inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-colors duration-100 rounded-md text-white bg-darkGreen hover:bg-highlightGreen ${className}`}
    >
      {children}
    </Link>
  )
}

export const SecondaryButton = ({ children, className, ...rest }) => {
  return (
    <Link
      {...rest}
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs font-medium transition-colors duration-100 text-green-700 bg-white rounded-md shadow lg:text-sm group hover:bg-green-50 ${className}`}
    >
      {children}
    </Link>
  )
}
