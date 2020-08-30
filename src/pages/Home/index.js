import React, { useState, useEffect } from 'react';

import { StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import Header from '../../components/Header';
import Body from '../../components/Body';

const Home = () => {

    const [items, setItems] = useState({
        tasks: [],
    });

    useEffect(() => {
        AsyncStorage.getItem('tasks')
            .then(values => {

                if (values) {
                    values = JSON.parse(values);

                    if (values.length > 0) {
                        setItems({
                            tasks: values
                        });
                    }
                }
            });
    }, []);

    const addTask = (task) => {
        let currentTasks = items.tasks;

        currentTasks.push(task);

        setItems({
            tasks: currentTasks
        });

        saveTasksInStorage(currentTasks);
    }

    const deleteTaskById = (id) => {
        let currentTasks = items.tasks.filter(f => f.id !== id);

        setItems({
            tasks: currentTasks
        });
        saveTasksInStorage(currentTasks);
    }

    const saveTasksInStorage = (tasks) => {
        AsyncStorage.setItem('tasks', JSON.stringify(tasks))
            .then(value => console.log(value))
            .catch(error => console.log(error));
    }

    return (
        <ScrollView
            style={styles.container}>
            <Header addTask={addTask} />
            <Body
                tasks={items.tasks}
                deleteTaskById={deleteTaskById}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
    },

});

export default Home;