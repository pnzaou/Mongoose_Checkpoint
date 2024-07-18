const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/User')

const generateToken = (id, email) => {
    return jwt.sign({data: {id, email}}, process.env.JWT_SECRET, {expiresIn: '24h'})
}

const signUp = async (req, res) => {
    try {
        const {fullName, email, password} = req.body
        const scelled = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, scelled)

        const user = await User.create({fullName, email, password: hashedPassword})
        const msg = 'Inscription reussie'
        return res.status(201).json({message: msg, data: user})

    } catch (error) {
        console.log(error);
        const msg = 'Echec d\'inscription'
        return res.status(500).json({message: msg, error})
    }
}

const signIn = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email: email})
        if(!user) {
            return res.status(401).json({message: 'Email incorrect'})
        } else {
            const passwordValid = await bcrypt.compare(password, user.password)
            if(!passwordValid) {
                return res.status(401).json({message: 'Email ou mot de passe incorrect'})
            } else {
                const token = generateToken(user._id, user.email)
                const msg = 'Connexion réussie'
                return res.status(200).json({message: msg, token})
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({error})
    }
}

module.exports = {
    signUp,
    signIn
}

