const Publication = require('../models/Publication');

exports.getAll = () => Publication.find();
exports.getOne = (publicationId) => Publication.findById(publicationId);
exports.getOneDetailed = (publicationId) => Publication.findById(publicationId).populate('author');
exports.create = (publicationData) => Publication.create(publicationData);
exports.update = (publicationId, publicationData) => Publication.updateOne({_id: publicationId}, {$set: publicationData});
exports.delete = (publicationId) => Publication.findByIdAndDelete(publicationId)