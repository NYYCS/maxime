import getDatabase from "../src/lib/getDatabase"

getDatabase().then(
  conn => {
    conn.query(
      `CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR UNIQUE NOT NULL,
        salt CHAR(32) NOT NULL,
        password VARCHAR NOT NULL,
        first_name CHAR(64) NOT NULL,
        last_name CHAR(64) NOT NULL,
        invited_by REFERENCES users,
      )
      CREATE TABLE invites (
        id SERIAL PRIMARY KEY,
        hash VARCHAR,
        created_by REFERENCES users,
        claimed_by REFERENCES users,
        status TEXT DEFAULT 'UNCLAIMED',
        expires_on TIMESTAMP DEFAULT CURRENT_DATE + INTERVAL('7 DAY'),
      )
      CREATE TABLE reservations (
        id SERIAL PRIMARY KEY,
        created_by REFERENCES users,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        date DATE NOT NULL,
        time TIME NOT NULL,
        guests INT NOT NULL,

      )
      `
    )
  }
)