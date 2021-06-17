import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transacao 1',
          amount: 400,
          type: 'deposit',
          category: 'Alimentação'
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);