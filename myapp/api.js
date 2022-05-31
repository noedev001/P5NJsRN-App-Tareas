/* eslint-disable prettier/prettier */

const API = 'http://10.0.2.2:3000/tasks';
// const API = 'http://192.168.42.24:3000/tasks';  /* Aki modifique la direccion ip de la cokputadora */

export const getTasks = async () => {
    const res = await fetch(API);
    return await res.json();
};


export const saveTask = async (newTask) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(newTask),
    });
    return await res.json();
};


export const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, {
        method: 'DELETE',
    });
};


export const getTask = async (id) => {
    const res = await fetch(`${API}/${id}`);
    return await res.json();
};

export const updateTask = async (id, newTask) => {
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(newTask),
    });
    // return await res.json();
    return res;
};
