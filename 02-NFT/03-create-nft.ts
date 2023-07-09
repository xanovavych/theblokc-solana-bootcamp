import { createMetaplexInstane } from "./metaflex";

async function main(){
    const metaflex = createMetaplexInstane()
    const metadataUri = 'https://arweave.net/Pxy5ajPhIfSp0SoyoVFDBe_5YcZce7nVtQwudFmnscI'
    const {nft} = await metaflex.nfts().create({
        uri: metadataUri,
        name: 'SolDevBootcamp',
        sellerFeeBasisPoints: 0,
    })

    console.log('nft', nft)
    /*
    nft {
  model: 'nft',
  updateAuthorityAddress: PublicKey [PublicKey(DjRnHH19rehxkmYWNhbZTEHZbR29KBctBFWu1YqF1gHk)] {
    _bn: <BN: bd2aa81f19f8c8a489dc760b6a6bab614b62eb70d3e11c9b2bf48702538fc8e7>
  },
  json: {
    name: 'xano.sol NFT',
    description: 'My first solana NFT using Metaplex Token Standard',
    image: 'https://arweave.net/8KrGF-jt17fDnCUSC_XfTBS70bBug6gB4msUmQnstII',
    attributes: [ [Object] ]
  },
  jsonLoaded: true,
  name: 'SolDevBootcamp',
  symbol: '',
  uri: 'https://arweave.net/Pxy5ajPhIfSp0SoyoVFDBe_5YcZce7nVtQwudFmnscI',
  isMutable: true,
  primarySaleHappened: false,
  sellerFeeBasisPoints: 0,
  editionNonce: 252,
  creators: [
    {
      address: [PublicKey [PublicKey(DjRnHH19rehxkmYWNhbZTEHZbR29KBctBFWu1YqF1gHk)]],
      verified: true,
      share: 100
    }
  ],
  tokenStandard: 0,
  collection: null,
  collectionDetails: null,
  uses: null,
  programmableConfig: null,
  address: PublicKey [PublicKey(AAMHrbgh1tdoQoAuU8qwJdybFqsxJSFRMBWvkVE35mTX)] {
    _bn: <BN: 881e5a2f05a21928bbcc983a1f712cdad2e70d4e09c698eb4ee99fe0d484c592>
  },
  metadataAddress: Pda [PublicKey(8iz9B8r4Pci89u56YHPn9WMubCwcuKv6B2gWP2pGULKE)] {
    _bn: <BN: 72c33b2b30cf33944371de152b964ddb53d6a1f1e5d803abdb466b0f0ba82095>,
    bump: 253
  },
  mint: {
    model: 'mint',
    address: PublicKey [PublicKey(AAMHrbgh1tdoQoAuU8qwJdybFqsxJSFRMBWvkVE35mTX)] {
      _bn: <BN: 881e5a2f05a21928bbcc983a1f712cdad2e70d4e09c698eb4ee99fe0d484c592>
    },
    mintAuthorityAddress: PublicKey [PublicKey(8fdC8ABs1jXt2y8rU6Nammz95F9gWudRtgZTC7VuxAS5)] {
      _bn: <BN: 71e6cd29230b9875d780124152f72ad5dd83c47cdfa29a49b95176b326e4864a>
    },
    freezeAuthorityAddress: PublicKey [PublicKey(8fdC8ABs1jXt2y8rU6Nammz95F9gWudRtgZTC7VuxAS5)] {
      _bn: <BN: 71e6cd29230b9875d780124152f72ad5dd83c47cdfa29a49b95176b326e4864a>
    },
    decimals: 0,
    supply: { basisPoints: <BN: 1>, currency: [Object] },
    isWrappedSol: false,
    currency: { symbol: 'Token', decimals: 0, namespace: 'spl-token' }
  },
  token: {
    model: 'token',
    address: Pda [PublicKey(52BoP7yU1rgT4FuQrHTzksLBYdJLzuhtRHFnkkR8VXfq)] {
      _bn: <BN: 3bbc8a2d167d47bf28ebbfdc6dfb16fc00636d2131129011382241456cc06b14>,
      bump: 255
    },
    isAssociatedToken: true,
    mintAddress: PublicKey [PublicKey(AAMHrbgh1tdoQoAuU8qwJdybFqsxJSFRMBWvkVE35mTX)] {
      _bn: <BN: 881e5a2f05a21928bbcc983a1f712cdad2e70d4e09c698eb4ee99fe0d484c592>
    },
    ownerAddress: PublicKey [PublicKey(DjRnHH19rehxkmYWNhbZTEHZbR29KBctBFWu1YqF1gHk)] {
      _bn: <BN: bd2aa81f19f8c8a489dc760b6a6bab614b62eb70d3e11c9b2bf48702538fc8e7>
    },
    amount: { basisPoints: <BN: 1>, currency: [Object] },
    closeAuthorityAddress: null,
    delegateAddress: null,
    delegateAmount: { basisPoints: <BN: 0>, currency: [Object] },
    state: 1
  },
  edition: {
    model: 'nftEdition',
    isOriginal: true,
    address: Pda [PublicKey(8fdC8ABs1jXt2y8rU6Nammz95F9gWudRtgZTC7VuxAS5)] {
      _bn: <BN: 71e6cd29230b9875d780124152f72ad5dd83c47cdfa29a49b95176b326e4864a>,
      bump: 252
    },
    supply: <BN: 0>,
    maxSupply: <BN: 0>
  }
    }
    */
}

main()