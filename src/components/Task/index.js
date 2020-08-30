import React from 'react';

import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Task = ({ title, deleteTaskById, taskId }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <TouchableHighlight onPress={() => deleteTaskById(taskId)}>
                <FontAwesomeIcon
                    size={30}
                    color='red'
                    icon={faTrash} />

            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 9,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
    }
});

export default Task;