import React, { useEffect, useState } from 'react'
import { CustomSelect } from '../CustomSelect'
import Search from '../Search/Search'
import { Wrapper } from './styles'
import { options } from './options'

const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  useEffect(() => {
    const regionValue = region?.value || ''

    onSearch(search, regionValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, region])

  return (
    <Wrapper>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  )
}

export default Controls