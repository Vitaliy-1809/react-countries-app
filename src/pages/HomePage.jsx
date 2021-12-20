import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Controls from '../components/Controls'
import List from '../components/List'
import Card from '../components/Card'
import { ALL_COUNTRIES } from '../config'

const Homepage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const { push } = useHistory()

  const handleSearch = (search, region) => {
    let data = [...countries]

    if (region) {
      data = data.filter(country => country.region.includes(region))
    }

    if (search) {
      data = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilteredCountries(data)
  }

  useEffect(() => {
    if (!countries.length)
      axios(ALL_COUNTRIES)
        .then(
          ({ data }) => setCountries(data)
        )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {
          filteredCountries.map(country => {
            const countryInfo = {
              img: country.flags.png,
              name: country.name,
              info: [
                {
                  title: 'Population',
                  description: country.population.toLocaleString()
                },
                {
                  title: 'Region',
                  description: country.region
                },
                {
                  title: 'Capital',
                  description: country.capital
                }
              ]
            }

            return <Card key={country.name} onClick={() => push(`/country/${country.name}`)} {...countryInfo} />
          })
        }
      </List>
    </>
  );
}

export default Homepage;
