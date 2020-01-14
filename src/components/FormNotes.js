import React, {Fragment} from 'react';
import {Form, Item, Button, Input, Text, Right, Body} from 'native-base';
import {StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';

const FormNotes = ({mode, onCreate, onEdit}) => {
  return (
    <Fragment>
      <Formik
        initialValues={{title: '', note: ''}}
        onSubmit={(values, actions) => {
          onCreate(values);
          actions.resetForm();
        }}>
        {props => (
          <Form>
            <Item>
              <Input
                value={props.values.title}
                onChangeText={props.handleChange('title')}
                placeholder="Title"
              />
            </Item>
            <Item>
              <Input
                multiline
                value={props.values.note}
                onChangeText={props.handleChange('note')}
                placeholder="add a note..."
              />
            </Item>
            <Right />
            <Button success style={styles.padder} onPress={props.handleSubmit}>
              <Body>
                <Text style={styles.textColor}>Add</Text>
              </Body>
            </Button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  padder: {
    margin: 10,
  },
  textColor: {
    color: 'white',
  },
});

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(FormNotes);
