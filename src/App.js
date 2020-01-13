/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Container, Left, Content, Header, Title, Body} from 'native-base';

import initialState from './notesData';
import FormNotes from './components/FormNotes';
import Notes from './components/Notes';

const App = () => {
  const [items, setItems] = useState(initialState);
  const [formItem, setFormItem] = useState({title: '', note: ''});
  const [mode, setMode] = useState('create');

  const handleCreate = values => {
    const {title, note} = values;

    const newItem = {
      id: items.length + 1,
      title,
      note,
    };

    setItems([...items, newItem]);
    console.log(items);
    setFormItem({title: '', note: ''});
  };

  return (
    <Container>
      <ScrollView>
        <Header style={styles.colorHeader} hasSegment={true}>
          <Left />
          <Body>
            <Title>Hey Notes</Title>
          </Body>
        </Header>
        <Content style={styles.container}>
          <FormNotes item={formItem} mode={mode} onCreate={handleCreate} />
          <Notes items={items} />
        </Content>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  colorHeader: {
    backgroundColor: '#009387',
  },
});

export default App;
