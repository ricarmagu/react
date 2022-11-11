const bcrypt = require("bcrypt-nodejs");
const user = require("..models/user");

function signUp(req, res) {
    const user = new User();
    const { email, password, repeatPassword } = req.body;
    user.email = email;
    user.role = "admin";
    user.active = true;
    if (!password || !repeatPassword) {
        res.status(404).send({ message: "las contraseñas son obligatorias" });
    } else {
        if (password !== repeatPassword) {
            res.status(404).send({ message: "las contraseñas no coinciden" })
        } else {
            bcrypt.hast(password, null, null, function (err, hash) {
                if (err) {
                    res
                        .status(500)
                        .send({ message: "Error al encriptar la contraseña." });
                } else {
                    user.password = hash;
                    user.save((err, userStored) => {
                        if (err) {
                            res.status(500).send({ message: "el usuario ya existe. " });
                        } else {
                            if (!userStored) {
                                res.status(404).send({ message: "error al crear el usuario. " });
                            } else {
                                res.status(200).send({ user: userStored });
                            }
                        }
                    });
                }
            });
        }
    }
}
module.exports = { signUp };