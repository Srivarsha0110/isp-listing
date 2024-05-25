import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ISPList from './components/ISPList';
import ProviderDetail from './components/ProviderDetail';
import { fetchProviders } from './services/apiService';

const App = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetchProviders().then(response => setProviders(response.data.providers));
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <ISPList providers={providers} />} />
        <Route path="/provider/:name" component={() => <ProviderDetail providers={providers} />} />
      </Switch>
    </Router>
  );
};

export default App;