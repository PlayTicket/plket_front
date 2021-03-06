import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddTicketMain from '../components/AddTicket/AddTicketMain';
import AddStars from '../components/AddTicket/AddStars';
import ChooseInfo from '../components/AddTicket/ChooseInfo';

const AddTicketStack = createStackNavigator();

const AddTicket = () => {
  return (
    <AddTicketStack.Navigator>
      <AddTicketStack.Screen
        name="AddTicketMain"
        component={AddTicketMain}
        options={{headerShown: false}}
      />
      <AddTicketStack.Screen
        name="ChooseInfo"
        component={ChooseInfo}
        options={{headerShown: false}}
      />
      <AddTicketStack.Screen
        name="AddStars"
        component={AddStars}
        options={{headerShown: false}}
      />
    </AddTicketStack.Navigator>
  );
};

export default AddTicket;
