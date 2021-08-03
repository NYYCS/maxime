import { Pool } from "pg"

const pool = new Pool();

const getDatabase = () => {
  return pool;
}

export default getDatabase;