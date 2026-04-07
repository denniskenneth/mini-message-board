let nextId = 1;
const messages = [
    { id: nextId++, text: "Hi there!", user: "Amando", added: new Date() },
    { id: nextId++, text: "Hello World!", user: "Charles", added: new Date() }
];

const indexController = (req, res) => {
    res.render('index', { title: 'Mini-Message Board', messages });
};

const getAddFormController = (req, res) => {
    res.render('addForm', { title: 'Add Message' });
};

const addMessage = (req, res) => {
    const username = req.body.username?.trim();
    const message = req.body.snippet?.trim();

    const errors = [];
    if (!username) errors.push('Username is required');
    if (!message) errors.push('Snippet is required');
    if (username && username.length > 50) errors.push('Username is too long');
    if (username && username.length < 3) errors.push('Username is too short');
    if (message && message.length < 5) errors.push('Snippet is too short');

    if (errors.length > 0) {
        return res.render('addForm', { title: 'Add Message', errors });
    }

    messages.push({ id: nextId++, text: message, user: username, added: new Date() });
    res.redirect('/');
};

const getMessageController = (req, res) => {
    const message = messages.find(m => m.id === Number(req.params.id));
    if (!message) return res.status(404).send('Message not found');
    res.render('messageDetail', { title: 'Message', message });
};

module.exports = { indexController, getAddFormController, addMessage, getMessageController };
