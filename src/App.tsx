import * as React from 'react';
import autobind from 'autobind-decorator';
import { observer, inject } from 'mobx-react';
import './App.css';
import { Store } from './index';

interface AppProps {
  store?: Store;
}

@inject('store')
@observer
class App extends React.Component<AppProps, {}> {
  render() {
    const store = this.props.store as Store;
    return (
      <div className="App">
        <p>{JSON.stringify(store.test)}</p>
        <button onClick={this.click}>추가</button>
      </div>
    );
  }
  @autobind
  click() {
    const store = this.props.store as Store;
    store.add();
  }
}

export default App;
