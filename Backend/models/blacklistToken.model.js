const mongose = require('mongoose');

const blacklistTokenSchema = new mongose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400,
    },
});

module.exports = mongose.model('BlacklistToken', blacklistTokenSchema);