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
import {connect} from 'react-redux';

import {createNote, deleteNote} from './store/actions/notesAction';
import FormNotes from './components/FormNotes';
import Notes from './components/Notes';

const Screen = ({notes, createNote, deleteNote}) => {
  const [mode, setMode] = useState('create');

  const handleCreate = ({title, note}) => {
    const newItem = {
      id: notes.length + 1,
      title,
      note,
    };

    createNote(newItem);
  };

  const handleUpdate = () => {
    const index = notes.findIndex(note => note.id === index);
  };

  const handleDelete = id => {
    deleteNote(id);
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
          <FormNotes mode={mode} onCreate={handleCreate} />
          <Notes onDelete={handleDelete} />
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

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, {createNote, deleteNote})(Screen);
