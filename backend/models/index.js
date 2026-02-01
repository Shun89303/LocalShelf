import * as userModel from './user.model.js';
import * as imageModel from './image.model.js';

export function initModels(db) {
    userModel.setDB(db);
    imageModel.setDB(db);
}

export {
    userModel,
    imageModel
}