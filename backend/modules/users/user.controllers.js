import User from './user.model';

const userController = {
    findUser: (req, res) => {
        const {credentials} = req.body;
        // res.json({errors: {global:"Cannot find"}})
        User.findOne({email: credentials.email})
            .then(user => {
                if(user && user.authenticatePassword(credentials.password)){
                    res.status(201).json({user: {email: user.email}})
                } else {
                    res.status(400).json({errors: {global: 'Invalid Credentials'}})
                }
            })
            .catch(err => res.status(400).json({errors: {global:'Cannot connect to database'}}) )
    },
    createUser: (req, res) => {
        User.create(req.body.data)
            .then(user => res.status(200).json({user}))
            .catch(err => res.status(400).json({errors: {global: 'Data did not saved in DB'+err}}))
    }
}
export default userController;