import bcrypt from "bcrypt"

export default async function(req, res) {
  bcrypt.hash("142659yY@", 10, (error, hash) => {
    res.status(200).json({ hash })
  });
}