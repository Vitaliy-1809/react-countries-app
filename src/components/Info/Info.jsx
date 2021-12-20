import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { filterByCode } from '../../config'
import { InfoImage, InfoTitle, List, ListGroup, ListItem, Meta, Tag, TagGroup, Wrapper } from './styles'

const Info = (
  { name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    push }) => {

  const [neighbors, setNeighbors] = useState([])

  useEffect(() => {
    if (borders.length)
      axios(filterByCode(borders)).then(
        ({ data }) => setNeighbors(data.map(c => c.name))
      )
  }, [borders])

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />

      <>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain</b> {' '}
              {topLevelDomain.map(d => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency</b> {' '}
              {currencies.map(c => (
                <span key={c.code}>{c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages</b> {' '}
              {languages.map(l => (
                <span key={l.name}>{l.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {
            !borders.length
              ? (<span>There is no border countries</span>)
              : (<TagGroup>
                {neighbors.map(b => (
                  <Tag
                    key={b}
                    onClick={() => push(`/country/${b}`)}
                  >
                    {b}
                  </Tag>
                ))}
              </TagGroup>)
          }
        </Meta>
      </>
    </Wrapper>
  )
}

export default Info