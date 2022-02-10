import { Component } from 'react';
import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleContact = contact => {
    this.setState(preState => (
      {
        contacts: [...preState, contact]
      }
    ));
  };

  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}

export default App;
