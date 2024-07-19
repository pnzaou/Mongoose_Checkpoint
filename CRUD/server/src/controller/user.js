const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/User')

const generateToken = (id, email) => {
    return jwt.sign({data: {id, email}}, process.env.JWT_SECRET, {expiresIn: '24h'}) //CETTE FONCTION GENERE LE TOKEN LORS DE LA CONNEXION DE L'UTILISATEUR GRACE A SON EMAIL ET SON ID 
}

const signUp = async (req, res) => { //FONCTION D'INSCRIPTION
    try {
        const {fullName, email, password} = req.body //ON RECUPERE LES INFORMATIONS ENVOYEES PAR L'USER POUR S'INSCRIRE EN DESTRUCTURANT L'OBJET REQ.BODY
        const scelled = await bcrypt.genSalt(10)//ICI ON DEFINI LE NOMBRE DE TOUR POUR CRYPTER LE MDP RECUPERE (10)
        const hashedPassword = await bcrypt.hash(password, scelled) //ICI ON CRYPTE LE MDP AVEC LA FONCTION HASH

        const user = await User.create({fullName, email, password: hashedPassword})//CREATION D'UN NOUVEL UTILISATEUR
        const msg = 'Inscription reussie'
        return res.status(201).json({message: msg, data: user})

    } catch (error) {
        console.log(error);
        const msg = 'Echec d\'inscription'
        return res.status(500).json({message: msg, error})
    }
}

const signIn = async (req, res) => {//FONCTION DE CONNEXION
    try {
        const {email, password} = req.body //ON RECUPERE LES INFORMATIONS ENVOYEES PAR L'USER POUR SE CONNECTER EN DESTRUCTURANT L'OBJET REQ.BODY
        const user = await User.findOne({email: email})//ON S'EN VA CHAERCHER SI UN UTILISATEUR AVEC CE MAIL EXISTE DANS LA BD
        if(!user) {//SI NON...
            return res.status(401).json({message: 'Email ou mot de passe incorrect'})//...ON ENVOIE CE MESSAGE
        } else {//SI OUI...
            const passwordValid = await bcrypt.compare(password, user.password)//...ON VERIFIE LA VALIDITE DU MDP EN COMPARANT LE MDP PASSE PAR L'USER ET CELUI STOCKE DANS LA DB (TOUJOURS RESPECTER CETTE ORDRE)
            if(!passwordValid) { //SI NON...
                return res.status(401).json({message: 'Email ou mot de passe incorrect'})//...ON ENVOIE CE MESSAGE
            } else {//SI OUI...
                const token = generateToken(user._id, user.email)//...ON GENERE LE TOKEN
                const msg = 'Connexion réussie'
                return res.status(200).json({message: msg, token})//ENFIN ON ENVOIE UN MESSAGE ET LE TOKEN AU CLIENT
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

