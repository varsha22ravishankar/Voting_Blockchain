import {ethers} from 'ethers';
async function main() {
  // const Voting = await ethers.getContractFactory("Voting");
  provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const contractInstance = new ethers.Contract (
    contractAddress, contractAbi, signer
  );

  // Start deployment, returning a promise that resolves to a contract object
  // const Voting_ = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 180);
 const voting= await contractInstance.addCandidate("mark");
  console.log("Contract address:", Voting_.address);


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit = 1;
 });