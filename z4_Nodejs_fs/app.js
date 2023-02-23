const { writeFile } = require("fs/promises");
const { exec } = require("child_process");

writeToFile("m.txt", "Andjyy");

const child = exec("dir", (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  }
  console.log(`Number of files ${stdout}`);
});

async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Podaci su upisani u fajl - ${fileName}`);
  } catch (error) {
    console.log(error);
  }
}
