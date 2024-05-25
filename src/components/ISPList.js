import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProviders } from '../services/apiService';

const ISPList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetchProviders().then(response => setProviders(response.data.providers));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {providers.map(provider => (
          <div className="col s12 m6 l4" key={provider.name}>
            <div className="card">
              <div className="card-image">
                <img src={provider.image} alt={provider.name} />
                <span className="card-title">{provider.name}</span>
              </div>
              <div className="card-content">
                <p>{provider.description}</p>
                <p><strong>Price:</strong> ${provider.lowest_price}</p>
                <p><strong>Rating:</strong> {provider.rating}</p>
                <p><strong>Max Speed:</strong> {provider.max_speed}</p>
              </div>
              <div className="card-action">
                <Link to={`/provider/${provider.name}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ISPList;