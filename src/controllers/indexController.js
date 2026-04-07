const indexController = (req, res) => {
    const messages = [
        {
            text: "Hi there!",
            user: "Amando",
            added: new Date()
        },
        {
            text: "Hello World!",
            user: "Charles",
            added: new Date()
        }
    ];

    res.render('index', { title: 'Mini-Message Board', messages });
}

const getAddFormController = (req, res) => {
    res.render('addForm', { title: 'Add Message' })
}

module.exports = { indexController, getAddFormController }