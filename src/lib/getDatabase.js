import { Pool } from "pg"
const connectionString = "postgres://riodmqgvtlkjfx:1d3df4969989c94cb28f011aa27a20320a6c232f75ca5dd32ccd118dffcf7fc8@ec2-34-198-103-34.compute-1.amazonaws.com:5432/d7or7eqrgpsd4f"
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  }
});


const getDatabase = () => {
  return pool;
}

export default getDatabase;