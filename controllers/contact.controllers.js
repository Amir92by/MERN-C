
const addContact = async(req,res) => { 
    const {name,email,phone}= req.body
  
   //name & email are required
    if (!name || !email) {
    return res.status(404).send({MSG:'name & email are required ***'})    
    }
   //unique email
    const testMail = await Contact.findOne({email})
    if (testMail) {
        return res.status(404).send({MSG:' contact alredy exist ***'})    
        }
            try {
            const newContact = new Contact({
                name,email,phone
            }) 

            await newContact.save()
            res.status(200).send({MSG:'contact added succefuly ♥', newContact})
        } catch (error) {
            res.status(404).send({MSG:'can not add contact ***'})
            
        }

 }

 const getAllContacts = async(req,res) => { 
    
    try {
        const contacts = await Contact.find()
       res.status(200).send({MSG:'get all contacts succefuly ♥', contacts})

    } catch (error) {
        res.status(404).send({MSG:'can not get  contacts ***',error})
    }
 }

 const getOneContact = async(req,res) => { 

    try {
        const ContactToFind = await Contact.findOne({_id: req.params.id}) 
        res.status(404).send({MSG:'I get the contact ♥♥ ',ContactToFind})
    } catch (error) {
        res.status(404).send({MSG:'can not get contact with this id ***',error})
    }
    
 }

 const deteleContact =  async(req,res) => { 
    
    try {
        const ContactToFind = await Contact.findByIdAndDelete({_id: req.params.id})
        if (!ContactToFind) {
          return  res.status(404).send({MSG:'contact alredy deleted ♥♥ '})
        } 
        res.status(200).send({MSG:'contact deleted ♥♥ ',ContactToFind})
    } catch (error) {
        res.status(404).send({MSG:'can not get delete with this id ***',error})
    }
    
 }

 const updateContact = async(req,res) => { 
        
    try {
        const {_id}= req.params
        const ContactToUpdate = await Contact.updateOne({_id},{$set:{...req.body} })
        if(!ContactToUpdate.modifiedCount){
       return  res.status(400).send({MSG:'contact already updated **'})

        }
        res.status(200).send({MSG:'contact updated ♥♥ ',ContactToUpdate})

    } catch (error) {
        res.status(400).send({MSG:'can not update contact with this id ***',error})
        // res.status(200).send({MSG:'contact updated ♥♥ ',})

    }
    
 }
module.exports = controllers = {
    addContact,
    getAllContacts,
    getOneContact ,
    deteleContact,
    updateContact,
}