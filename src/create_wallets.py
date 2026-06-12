from eth_account import Account
from eth_account.hdaccount import generate_mnemonic

Account.enable_unaudited_hdwallet_features()

mnemonic = generate_mnemonic(num_words=12, lang="english")
print(f"Mnemonic: {mnemonic}\n")

for i in range(10):
    acct = Account.from_mnemonic(mnemonic, account_path=f"m/44'/60'/0'/0/{i}")
    print(f"Address {i}: {acct.address}")
