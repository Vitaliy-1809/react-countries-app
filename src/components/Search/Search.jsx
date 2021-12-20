import React from 'react'
import { IoSearch } from "react-icons/io5"
import { Input, InputContainer } from './styles'

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </InputContainer>
  )
}

export default Search