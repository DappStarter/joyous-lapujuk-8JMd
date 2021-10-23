require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy renew magic attitude heavy prize slot gesture'; 
let testAccounts = [
"0xc3242d439d4eacedcdbc515c769f79873c742d5ac484fb256fbaa7eef2e952a8",
"0x57880ab79ef4e2326426b7655e2a66c6b2f41aa99312696ab5aa6d1a0ae7f809",
"0x6955f07e235d6fd7b80c38376b844f36a506029df45cd2e186e3035a58a7e320",
"0x3ab92f9f983cc6fd81b1352c2de7a12c5713dbbf9b9db471bdd5b22502810690",
"0xdfd9b237e2fb954afacb1fdd7ec14e1cd9de50f9109b671d4c0368f94e3afea1",
"0xc282fdce6a6ac2e298c6b7227a37b06c3528a66858b48555b3288bc43dcd11ec",
"0xd88b5e8bef0aa771d23bfaf759fa2ced9b6cc4e85b50594c3d060e5e099b4bbb",
"0xb57c490bc010c630827a54d2ef7bcd2d06a32e999b893017a43d58b7bde56881",
"0x8dfa44529a4b70a5e460d76b9710f1540fbb4607e034886491c18129b97b9798",
"0x7379862796bd155739a38e01d7a10b9f638c7052a732aae0e0067e29a825a8d1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

