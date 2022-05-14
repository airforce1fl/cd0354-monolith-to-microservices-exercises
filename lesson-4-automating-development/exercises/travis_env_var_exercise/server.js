const dockerUsername = process.env.DOCKER_USERNAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('My docker account is ${dockerUsername}');
    //console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
