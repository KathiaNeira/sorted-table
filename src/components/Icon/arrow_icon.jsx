import React from 'react'

export const IconArrow = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.06 6l3.517 4.5H8.544L12.061 6zM12.06 18l-3.516-4.5h7.033L12.06 18z"
        fill={props.selected === 'selected' ? "#d7f724" : "#4C6176"}
      />
    </svg>
  )
}