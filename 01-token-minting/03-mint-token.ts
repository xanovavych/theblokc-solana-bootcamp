import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58'
import{SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction} from  '@solana/web3.js'

async function main() {
    
    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet'));
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('FkEqUfb5Cf7aGNxRncPpZGd5unhhaQzhfwnWkjXXYuP8'), 
        new Web3.PublicKey('7GeE5Z2xZZm8YNsUvgxLQb5boJBsKLNC6nJs1gD9Mngf'),
        new Web3.PublicKey('DjRnHH19rehxkmYWNhbZTEHZbR29KBctBFWu1YqF1gHk'),
        1500 * LAMPORTS_PER_SOL
    );
console.log('mintToken', mintToken);
//mintToken 5g3pK7KJsVZoXJamnmRVi5LSz4qvXfj16N3cgyppPdhy2ah3E3aa7Mf6ZWzzAX8sMsbALY9cVSvoBbDNcc865raT

}
main()
