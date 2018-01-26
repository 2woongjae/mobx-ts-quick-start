import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { observable, action, useStrict } from 'mobx';
import { Provider } from 'mobx-react';

useStrict(true);

export class Store {
  @observable test: number[] = [];
  @action
  add(): void {
    this.test.push(Math.round(Math.random() * 100));
  }
}

const store = new Store();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
