import sql from "../../config/database.js";

export const getOneUser = async (request, response) => {
  try {
    const data = await sql`SELECT * FROM users`;
    response.send(data);
  } catch (error) {
    console.log(error);
  }
};
