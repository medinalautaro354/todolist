import React, { useState } from 'react';

import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const Header = ({ addTask }) => {

    const [task, setTask] = useState({
        id: 0,
        name: '',
        state: true
    });

    const handlerSetTask = (text) => {
        setTask({
            id: uuidv4(),
            name: text,
            state: true
        });
    }

    const onSubmit = () => {
        if (task.name !== '') {
            addTask(task);

            setTask({
                id: 0,
                name: ''
            })
        }
    }

    return (
        <KeyboardAvoidingView
            behavior='behavior'
            style={styles.container}>
            <Text style={styles.textCenter}>Todo APP</Text>
            <View style={styles.containerInput}>
                <TextInput
                    placeholder={'Ingrese nombre de tarea'}
                    style={styles.textInput}
                    value={task.name}
                    onChangeText={value => handlerSetTask(value)}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={onSubmit}
                >
                    <Text style={styles.textBtn}>+</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#20A189',
        borderRadius: 10,
        height: 170
    },
    textCenter: {
        paddingTop: 10,
        alignSelf: 'center',
        fontSize: 20
    },
    containerInput: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 10,
        flexGrow: 1,
        marginRight: 10
    },
    btn: {
        backgroundColor: '#00FF00',
        justifyContent: 'center',
        width: 50,
        borderRadius: 10,
        marginRight: 10
    },
    textBtn: {
        alignSelf: 'center',
        fontSize: 30
    }
});

export default Header;