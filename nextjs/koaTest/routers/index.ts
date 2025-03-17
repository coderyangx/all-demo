const user = require('../controller/user');
const koa_router = require('koa-router');
const router = koa_router();
router.post('/findAll', user.findAllUser);
module.exports = router;
