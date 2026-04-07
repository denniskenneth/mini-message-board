const messages = [
    { id: 1, user: "Amando", text: "Hi there!", added: new Date() },
    { id: 2, user: "Charles", text: "Hello World!", added: new Date() },
];

let nextId = 3;

const getAll = () => messages;

const getById = (id) => messages.find(m => m.id === Number(id));

const add = (user, text) => {
    const message = { id: nextId++, user, text, added: new Date() };
    messages.push(message);
    return message;
};

module.exports = { getAll, getById, add };
