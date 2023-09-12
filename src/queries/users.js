/**
 * Add New User
 */
const addUser = `
  INSERT INTO users(
    firstname,
    lastname,
    username,
    password
  )
  VALUES ($1,$2,$3,$4) RETURNING id, firstname,lastname, username, created_at
`;

const findUserByUserName = `
 SELECT id, firstname, lastname, username, password FROM users WHERE username=$1
`

module.exports = {
    addUser,
    findUserByUserName
}