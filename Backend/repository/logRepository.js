//dummy logs
const getLogs = async () => {
    return [
        { id: 1, message: "User registered", time: new Date().toISOString() },
        { id: 2, message: "User authenticated", time: new Date().toISOString() }
    ];
};

module.exports = { getLogs };
