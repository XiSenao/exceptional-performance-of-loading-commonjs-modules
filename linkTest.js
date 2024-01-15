import { exec } from "child_process";

const command = `ln -s ${process.cwd()}/src/link/* node_modules/`;

exec(command);
