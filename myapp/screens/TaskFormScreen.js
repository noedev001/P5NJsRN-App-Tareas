/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Layout from '../components/Layout';
import { saveTask, getTask, updateTask } from '../api.js';

const TaskFormScreen = ({ navigation, route }) => {

    const [task, setTask] = React.useState({
        title: '',
        description: '',
    });

    const [editing, setEditing] = React.useState(false);

    const handleChange = (name, value) => setTask({ ...task, [name]: value });

    const handleSubmit = async () => {
        try {
            if (!editing) {
                await saveTask(task);
            } else {
                await updateTask(route.params.id, task);
            }
            navigation.navigate('HomeScreen');
        } catch (e) { console.log(e); }

    };


    React.useEffect(() => {
        if (route.params && route.params.id) {
            navigation.setOptions({ headerTitle: 'Updating a Task' });
            setEditing(true);
            (async () => {
                const task1 = await getTask(route.params.id);
                setTask({ title: task1.title, description: task1.description });
            })();
        }
    }, [navigation, route.params]);

    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Write a Title"
                placeholderTextColor="#546574"
                onChangeText={(text) => handleChange('title', text)}
                value={task.title}
            />

            <TextInput
                style={styles.input}
                placeholder="Write a Description"
                placeholderTextColor="#546574"
                onChangeText={(text) => handleChange('description', text)}
                value={task.description}
            />
            {
                !editing ? (
                    <TouchableOpacity
                        style={styles.buttonSave}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>Save Task</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.buttonUpdate}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>Update Task</Text>
                    </TouchableOpacity>
                )
            }


        </Layout>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '90%',
        fontSize: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#10ac84',
        height: 40,
        color: '#fff',
        padding: 4,
        textAlign: 'center',
        borderRadius: 5,
    },
    buttonSave: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: '#10ac84',
        width: '90%',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    buttonUpdate: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: '#e58e26',
        width: '90%',
    },
});

export default TaskFormScreen;
