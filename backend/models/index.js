import * as userModel from './user.model.js';

export function initModels(db) {
    userModel.setDB(db);
}

export {
    userModel
}