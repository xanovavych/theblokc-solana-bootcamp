import { createMetaplexInstane } from "./metaflex";
const metaflex = createMetaplexInstane()

const metadata = {
    name: "xano.sol NFT",
    description: "My first solana NFT using Metaplex Token Standard",
    image: "https://arweave.net/8KrGF-jt17fDnCUSC_XfTBS70bBug6gB4msUmQnstII",
    attributes: [
        {
            trait_type: 'Event',
            value: 'Solana Developers Bootcamp'
        }
    ]
}

async function main(){
    const {uri} = await metaflex.nfts().uploadMetadata(metadata)
    console.log('metadata uri', uri);
    //metadata uri https://arweave.net/Pxy5ajPhIfSp0SoyoVFDBe_5YcZce7nVtQwudFmnscI
}

main()
