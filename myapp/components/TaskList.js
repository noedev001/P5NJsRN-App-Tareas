/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import TaskItem from './TaskItem';
import { getTasks, deleteTask } from '../api';
import { useIsFocused } from '@react-navigation/native';

const TaskList = () => {

    const [tasks, setTasks] = React.useState([]);

    const [refreshing, setRefreshing] = React.useState(false);


    const isFocused = useIsFocused();

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    React.useEffect(() => {

        loadTasks();
    }, [isFocused]);


    const handleDelete = async (id) => {
        await deleteTask(id);
        await loadTasks();
    };

    const renderItem = ({ item }) => {
        return (
            <TaskItem tasks={item} handleDelete={handleDelete} />
        );
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadTasks();
        setRefreshing(false);
    });

    return (
        <FlatList
            style={{ width: '100%' }}
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    colors={["#78e08f"]}
                    onRefresh={onRefresh}
                    progressBackgroundColor="#0a3d62"
                />
            }
        />
    );
};

export default TaskList;
