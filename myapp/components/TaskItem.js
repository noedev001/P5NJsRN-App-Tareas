/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TaskItem = ({ tasks, handleDelete }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.itemContainer}>

            <TouchableOpacity onPress={() => { navigation.navigate('TaskFormScreen', { id: tasks.id }); }}>
                <Text style={styles.itemTitle}>{tasks.title}</Text>
                <Text style={styles.itemTitle}>{tasks.description}</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ backgroundColor: '#ee5253', padding: 7, borderRadius: 5 }}
                onPress={() => handleDelete(tasks.id)}
            >
                <Text style={{ color: '#fff' }}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemTitle: {
        color: '#fff',
    },
});


export default TaskItem;

