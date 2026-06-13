const { ethers } = require("ethers");

const mnemonic = ethers.Mnemonic.entropyToPhrase(ethers.randomBytes(16));
console.log(`Mnemonic: ${mnemonic}\n`);

for (let i = 0; i < 10; i++) {
  const wallet = ethers.HDNodeWallet.fromMnemonic(
    ethers.Mnemonic.fromPhrase(mnemonic),
    `m/44'/60'/0'/0/${i}`
  );
  console.log(`Address ${i}: ${wallet.address}`);
}
