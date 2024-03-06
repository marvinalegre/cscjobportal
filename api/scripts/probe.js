import { exec, execSync } from "child_process";
import sleep from "../lib/sleep.js";

//////////////////////////////////////////////
const REQ_PER_SECOND = 50;
const START = 3730001;
const END = 3739000;
const GAP = 100;

//////////////////////////////////////////////
execSync("rm -rf posts; mkdir posts;");

let count = 0;
for (let i = START; i < END + 1; i += GAP) {
  exec(
    `wget -q https://csc.gov.ph/career/job/${i} -O ./posts/${i}`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(i, `error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.log(i, `stderr: ${stderr}`);
        return;
      }
    }
  );

  count++;

  if (count % REQ_PER_SECOND === 0) {
    await sleep(1000);
  }
}
