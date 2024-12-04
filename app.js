// Corep modules
const path = require("path");
// External modules
const express = require("express");

// Local modules
const userRouter = require("./routes/userRouter");
const rootDir = require("./utils/pathUtils");

const app = express();

// Server static files from the 'public' folder

app.use(userRouter);
app.use(express.static(path.join(rootDir, 'public'clea)));

// listening the server and addressing the port
const PORT = 3040;
app.listen(PORT, () => {
  console.log(`Server is running at address http://localhost:${PORT}`);
});
