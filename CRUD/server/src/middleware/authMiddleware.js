const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization //ICI ON RECUPERE LA CHAINE CONTENANT LE TOKEN DANS LE HEADER DE LA REQUETE
    if(!token) return res.status(403).json({message: 'Accès refusé'}) // SI AUCUN TOKEN N'EST TROUVE ON RENVOIE UN CODE DE STATUT 403 ET LE MESSAGE
    const extractToken = token//ICI ON TRANSFORME LE TOKEN EN UN TABLEAU DE TAILLE 2 ['BEARER', 'NOTRE TOKEN'] ET ON EXTRAIT NOTRE TOKEN A L'INDICE 1 DU TABLEAU
    jwt.verify(extractToken, process.env.JWT_SECRET, (err, decode) => { //ICI ON VERIFIE SI LE TOKEN EXTRAIT EST VALID
        if(err){
            return res.status(401).json({message: 'token invalid', err}) //SI LE TOKEN EST INVALID ON RENVOIE UN MESSAGE D'ERREUR
        }
        const {email, id} = decode.data //DANS LE CONTROLLER LORSQU'ON GENERE LE TOKEN ON UTILISE L'EMAIL ET L'ID DE L'UTILSATEUR QUI SE CONNECTE ET ICI ON LES EXTRAIT PAR DESTRUCTURATION
        req.id = id //PUIS ON LES PASSE A LA REQUETE
        req.email = email
        next()//ET ENFIN ON PASSE AU MIDDLEWARW SUIVANT (DANS NOTRE CAS : NOS DIFFERENTES FONCTIONS CRUD)
    })
}

module.exports = verifyToken