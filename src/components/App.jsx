import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';
import Form from './Form';
import Contacts from './Contacns';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleContact = userData => {
    const contact = { ...userData, id: nanoid() };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  handleFilter = e => {
    const { value } = e.currentTarget;
    const { contacts } = this.state;
    this.setState({
      filter: contacts.filter(contact =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      ),
    });
  };

  render() {
    const contactsList = this.state.contacts;

    return (
      <Section title="Phonebook">
        <Form onSubmit={this.handleContact} />
        <Contacts contacts={contactsList} onFilter={this.handleFilter} />
      </Section>
    );
  }
}

export default App;
