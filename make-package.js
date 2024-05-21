import { cp } from "node:fs/promises";

await cp("./sample-package", "./node_modules/sample-package", {
  recursive: true,
});
