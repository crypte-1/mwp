const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const GreetContractFactory = await hre.ethers.getContractFactory(
    "GreetPortal"
  );
  const GreetContract = await GreetContractFactory.deploy();
  await GreetContract.deployed();

  console.log("Contract deployed to:", GreetContract.address);
  console.log("Contract deployed by:", owner.address);

  let GreetCount;
  GreetCount = await GreetContract.getTotalgreets();

  let GreetTxn = await GreetContract.Greet();
  await GreetTxn.wait();

  GreetCount = await GreetContract.getTotalGreets();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
