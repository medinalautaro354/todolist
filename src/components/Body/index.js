import React from 'react';

import { Text, StyleSheet, KeyboardAvoidingView, View, FlatList } from 'react-native';

import Task from '../Task';

const Body = ({ tasks, deleteTaskById }) => {
    const renderItem = ({ item }) => {
        return (<Task title={item.name} deleteTaskById={deleteTaskById} taskId={item.id} />)
    };

    const returnTextNoTasks = () => (
        <View style={styles.textNoTasksContainer}>
            <Text style={styles.textNoTasks}>No hay tareas</Text>
        </View>
    );
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.textCenter}>Tareas</Text>
            {tasks.length == 0 ? returnTextNoTasks() : null}
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        alignContent: 'center',
        backgroundColor: '#2A9CC1',
        borderRadius: 10,
        height: 489,
        maxHeight: '100%'
    },
    textCenter: {
        alignSelf: 'center',
        marginTop: 30,
        fontSize: 20
    },
    textNoTasksContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 10
    },
    textNoTasks: {
        fontSize: 20
    }
});

export default Body;