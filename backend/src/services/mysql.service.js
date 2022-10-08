import { createConnection } from "mysql";
import config from "../confing.js";

const connect = createConnection(config.mySQL);

export default connect;
