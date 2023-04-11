const express = require('express')
const router = express.Router()
const addUser = require('./addUser')
const allUsers = require('./allUsers')

router.route('/add-user').post(addUser)
router.route('/all-users').get(allUsers)

module.exports = router
// export default router
