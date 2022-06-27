require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note snow huge grace industry fringe two'; 
let testAccounts = [
"0x976ed91174b7295cfb911ba8e602ab888ce0d183b0b59fd5f628dd0933facc2d",
"0x65dd45da31deb887f87a9408147a8a47faf1cad8bf8fdf46e182927a05feb3d9",
"0xf719ea79fb59ded8fcfa82dcb0fcb5d0a25f70fe64d84050b3407fd0ac34c97f",
"0x83b1e15a2c962ae6924795a4992a28a1354c22134c6ec3b85e79d83ba770aa82",
"0x3aefc3a1935fc588d492994cb461311f6c13551245a7d2202527c500a1098b5e",
"0x69bb7dcced729c324b3dec8144082547e042bf8924780ca50d9c5f05d1e1fa14",
"0xa283bbc180be0b9a27bb7d5804e3c84b4819a7ea28dbace5c1e77f4972bc9690",
"0x8d804ab6674edebfbe432221af72c9a5b02cd075312b9e15db6cfa42c5150d37",
"0x079b2664ab83be5eab387ecf766caba08fb1b29635b6314034c625d00a8d85d1",
"0x2c59aba007753641d2f355f6f2401cfcabf6cc60ce5c290ec458782164a8a983"
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

