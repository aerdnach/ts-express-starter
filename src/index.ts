import { createServer } from "./server/app";

const app = createServer();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
