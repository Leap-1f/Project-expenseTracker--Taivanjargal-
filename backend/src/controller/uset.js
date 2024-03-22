export const Didi = async () => {
  try {
    const data = await sql`SELECT * FROM users`;
    console.log(data);
    res.send("hello world");
  } catch (error) {
    console.log(error);
  }
};
