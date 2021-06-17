import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          type: 'deposit',
          category: 'Venda',
          amount: 12000.00,
          createdAt: new Date('2021-04-14')
        },
        {
          id: 2,
          title: 'Hambúrguer',
          type: 'withdraw',
          category: 'Alimentação',
          amount: -59.00,
          createdAt: new Date('2021-04-10')
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Despesas fixas',
          amount: -1200.00,
          createdAt: new Date('2021-04-05')
        },
        {
          id: 4,
          title: 'Venda de computador',
          type: 'deposit',
          category: 'Venda',
          amount: 5400.50,
          createdAt: new Date('2021-04-13')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'dtmoney/api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', {
        ...data,
        amount: data.type === 'withdraw' ? data.amount * -1 : data.amount,
        createdAt: new Date(),
      });
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);