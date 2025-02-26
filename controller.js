const login = (req, res) => {
    const {email, password} = req.body
    if (!email) {
        return res.status(400).send("Email cannot be empty")
    }

    if (!password) {
        return res.status(400).send("Password cannot be empty")
    }

    return res.status(200).send("User Logged in Successfully")
}


module.exports = login