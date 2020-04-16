require("dotenv").config();
const server = require("./server");
const cors = require("cors");

server.use(cors());

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log("server is running on port 4000"));
