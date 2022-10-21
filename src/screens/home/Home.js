import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StatusBar, Alert, Modal} from 'react-native';
import ChangeUrl from '@components/ChangeUrl';


export default function Home({ navigation }) {
  
  const [updateUrlModal, setCloseModal] = useState(true)

    return (
        <Modal
            style={{flex: 1, justifyContent: "center", alignItems: "center" }}
            transparent={true}
            visible={updateUrlModal}
            animationType="fade"
            >
            <ChangeUrl onClose={() => setCloseModal(false)}/>
        </Modal>
    )
}