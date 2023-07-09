import { createMetaplexInstane } from "./metaflex";
import { toMetaplexFile} from '@metaplex-foundation/js'
import fs from 'fs'

const buffer = fs.readFileSync(__dirname + '/assets/xano.jpg');
const file = toMetaplexFile(buffer, "image.jpg");

const metaflex = createMetaplexInstane()

async function main(){
    const imageUrl = await metaflex.storage().upload(file)
    console.log('image URL', imageUrl);
    //https://arweave.net/8KrGF-jt17fDnCUSC_XfTBS70bBug6gB4msUmQnstII
}

main()
