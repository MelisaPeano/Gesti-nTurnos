import server from "./server";
import { PORT } from "./config/envs"

server.listen(PORT, () => {
    `server listening on port ${PORT}`
});