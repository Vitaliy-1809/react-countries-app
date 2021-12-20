import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CustomSelect } from './CustomSelect';
import Search from './Search';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Europe', label: 'Europe' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Oceania', label: 'Oceania' },
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

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
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
}

export default Controls;
