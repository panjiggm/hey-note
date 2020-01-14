import React, {Fragment} from 'react';
import {
  Card,
  CardItem,
  Body,
  Text,
  Right,
  Button,
  Left,
  Icon,
} from 'native-base';
import {connect} from 'react-redux';

const Notes = ({items}) => {
  return (
    <Fragment>
      {items.length > 0 ? (
        items.map(({id, title, note}) => (
          <Card key={id}>
            <CardItem header bordered>
              <Text style={{fontWeight: 'bold'}}>{title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{note}</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Left></Left>
              <Body>
                <Button warning small>
                  <Icon name="star" />
                  <Text>Edit</Text>
                </Button>
              </Body>
              <Right>
                <Button danger small>
                  <Icon name="trash" />
                  <Text>Delete</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        ))
      ) : (
        <Text>No Notes</Text>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    items: state.notes,
  };
};

export default connect(mapStateToProps)(Notes);
