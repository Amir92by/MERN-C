const express = require('express');

const router = express.Router()

//require model Contact
const Contact = require('../models/Contact');
//require controllers
const controllers = require('../controllers/contact.controllers');
/*************routes*********** */

/**DPMDA
 * @desc : test route
 * @path :  "http://localhost:7000/api/contacts/test"
 * @method : get
 * @data : no data
 * @acces : public
 */
router.get('/test', (req,res) => { 
    res.send('test route')
 })


 /**add contact
 * @desc : add contact 
 * @path :  "http://localhost:7000/api/contacts/"
 * @method : post
 * @data : req.body
 * @acces : public
 */
router.post('/', controllers.addContact)



 /**get all  contacts
 * @desc : get all  contacts
 * @path :  "http://localhost:7000/api/contacts/"
 * @method : get
 * @data : no data
 * @acces : public
 */
router.get('/',controllers.getAllContacts )


 /**DPMDA
 * @desc : get 1 contact
 * @path :  "http://localhost:7000/api/contacts/:id"
 * @method : get
 * @data : req.params
 * @acces : public
 */
router.get('/:id', controllers.getOneContact)


 /**DPMDA
 * @desc : delete  contact
 * @path :  "http://localhost:7000/api/contacts/:id"
 * @method : delete
 * @data : req.params
 * @acces : public
 */
  router.delete('/:id',controllers.deteleContact)


 /**
 * @desc : update contact
 * @path :  "http://localhost:7000/api/contacts/:id"
 * @method : put
 * @data : req.params + req.body
 * @acces : public
 */
  router.put('/:_id', controllers.updateContact)



module.exports = router

