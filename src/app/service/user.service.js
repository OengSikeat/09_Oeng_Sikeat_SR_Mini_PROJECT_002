import headerToken from "@/app/api/headerToken";

export const getUser = async () => {
  const header = await headerToken();
  const res = await fetch(
    `${process.env.NEXT_APIURL}/user`,
    {
      headers: header,
    }
  );
  const data = await res.json();
  return data;
};