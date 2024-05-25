import React from 'react';
import { useParams } from 'react-router-dom';

const ProviderDetail = ({ providers }) => {
  const { name } = useParams();
  const provider = providers.find(p => p.name === name);

  if (!provider) return <p>Provider not found</p>;

  return (
    <div className="container">
      <h2>{provider.name}</h2>
      <img src={provider.image} alt={provider.name} />
      <p>{provider.description}</p>
      <p><strong>Rating:</strong> {provider.rating}</p>
      <p><strong>Max Speed:</strong> {provider.max_speed}</p>
      <p><strong>Contact:</strong> {provider.contact_no}</p>
      <p><strong>Email:</strong> {provider.email}</p>
    </div>
  );
};

export default ProviderDetail;