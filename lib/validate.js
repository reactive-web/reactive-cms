const userTypes = require('../config/user-types')


const validateUserType = (typeName) => {
    for(type of userTypes) {
        if(typeName === type.type_name)
            return true
    }
    return false
}


module.exports = {
    validateUserType
}