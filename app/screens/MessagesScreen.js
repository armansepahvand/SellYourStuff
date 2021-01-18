import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';

////temporary array to simulate data coming from server
const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/arman.png'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/arman.png'),
  },
];

function MessagesScreen(props) {
  //set messages as a state with initial value of initialMessages array
  const [messages, setMessages] = useState(initialMessages);
  //set refreshing state as false
  const [refreshing, setrefreshing] = useState(false);

  //function to remove a message from messages state after being called
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id != message.id));
  };
  return (
    <Screen>
      {/* flatlist component to create a list of messages  */}
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log('Tapped', item)}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/arman.png'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
