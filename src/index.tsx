import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from "miragejs";
import transactionsDefault from './transactionsDefault.json';

const transactionsStorage = localStorage.getItem('@dtmoney:transactions');

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: transactionsStorage
        ? JSON.parse(transactionsStorage)
        : transactionsDefault,
    })
  },

  routes() {
    this.namespace = 'dtmoney/api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      const transaction = schema.create('transaction', {
        ...data,
        amount: data.type === 'withdraw' ? data.amount * -1 : data.amount,
        createdAt: new Date(),
      });
      return transaction;
    });

    this.del("/transactions/:id");
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);