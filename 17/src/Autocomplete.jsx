import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
export default function Autocomplete() {
  const [term, setTerm] = React.useState('');
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    if (term === '') {
      setCountries([])
      return
    }
    let cancelled = false
    axios.get('/countries', { params: { term } })
      .then((res) => {
        if (!cancelled) {
          setCountries(res.data)
        }
      })

    return () => {
      cancelled = true
    }
  }, [term])
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Country"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
      {countries.length > 0 && (
        <ul>
          {countries.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
// END
