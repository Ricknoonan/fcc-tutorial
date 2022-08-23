const { Provider } = require("@ethersproject/providers")
const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    const { deployer } = getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log(`Got contract FundMe at ${fundMe.address}`)
    console.log("Checking Balance of contract....")
    const balance = await fundMe.provider.getBalance(fundMe.address)
    console.log(`Balance: ${balance}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
