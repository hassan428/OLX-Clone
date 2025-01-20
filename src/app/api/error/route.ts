export const GET = (err: any) => {
  console.log("error_handler");
  console.log("err", err);

  let status = 500;

  let data = {
    success: false,
    message: "Internal Server Error",
  };

  if (err.status) status = err.status;

  if (err.message) data.message = err.message;
  console.log("data error handler", data);

  return Response.json({ data, status });
};
