const mongoose = require('mongoose');

const BusinessEntitySchema = new mongoose.Schema({
    businessEntity: {
        type: String,
        required: true,
    },
    businessEntityType: {
        type: String,
        required: true,
    },
    relatedLocations: {
        type: [String],
        default: [],
    },
    parentBusinessEntity: {
        type: String,
        default: null,
    },
    childBusinessEntities: {
        type: [String],
        default: [],
    },
}, { timestamps: true });

const BusinessEntity = mongoose.model('BusinessEntity', BusinessEntitySchema);

module.exports = BusinessEntity;
