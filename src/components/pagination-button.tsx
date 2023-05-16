import React, { KeyboardEvent } from 'react'

interface IProps {
  handleChangePage: (page: number) => void
  
  handleKeyChangePage: (e: KeyboardEvent, page: number) => void
  currentPage: number
  shift: number
}

export const PaginationButton = ({
  handleChangePage,
  handleKeyChangePage,
  currentPage,
  shift
}: IProps) => (
  
  <li
   
    tabIndex={0}
    onClick={() => handleChangePage(currentPage + shift)}
    onKeyDown={(e) => handleKeyChangePage(e, currentPage + shift)}>
    {currentPage + shift}
  </li>
)
