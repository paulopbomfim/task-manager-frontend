import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    task: Model,
  },

  seeds(server) {
    server.db.loadData({
      tasks: [
        {
          id: 1,
          description: 'Finalizar front end',
          createdAt: new Date(),
          status: 'pending',
        },
        {
          id: 2,
          description: 'Finalizar back end',
          createdAt: new Date(),
          status: 'doing',
        },
        {
          id: 3,
          description: 'Finalizar projeto',
          createdAt: new Date(),
          status: 'complete',
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/tasks', () => this.schema.all('task'));

    this.post('/tasks', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      data.createdAt = new Date();
      return schema.create('task', data);
    });
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
