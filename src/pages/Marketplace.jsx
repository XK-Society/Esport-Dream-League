import { useWallet } from '@solana/wallet-adapter-react';
import CardPacks from '../components/CardPacks';
import PlayerCards from '../components/PlayerCards';

const Marketplace = () => {
  const { connected } = useWallet();

  const listedCards = [
    { 
      id: 11, 
      price: 6500, 
      name: 'Player 1', 
      rarity: 'Rare',
      seller: {
        address: 'GH7Zj2jUkNYxuYfoZqRvxwEHsX2p1HhQCemHNeZJAk3p',
        username: 'CryptoKing'
      }
    },
    { 
      id: 12, 
      price: 8500, 
      name: 'Player 2', 
      rarity: 'Epic',
      seller: {
        address: 'JK9Zj2jUkNYxuYfoZqRvxwEHsX2p1HhQCemHNeZJAk3p',
        username: 'NFTCollector'
      }
    },
    { 
      id: 13, 
      price: 12000, 
      name: 'Player 3', 
      rarity: 'Legendary',
      seller: {
        address: 'LM9Zj2jUkNYxuYfoZqRvxwEHsX2p1HhQCemHNeZJAk3p',
        username: 'CardMaster'
      }
    }
  ];

  const handleBuyPack = (packId, price) => {
    if (!connected) {
      alert('Please connect your wallet first');
      return;
    }
    console.log(`Buying pack ${packId} for ${price} LYT`);
  };

  const handleBuyCard = (cardId, price) => {
    if (!connected) {
      alert('Please connect your wallet first');
      return;
    }
    console.log(`Buying card ${cardId} for ${price} LYT`);
  };

  const truncateAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <div className="container mx-auto px-4 space-y-8">
      <CardPacks onBuyPack={handleBuyPack} />
      <PlayerCards 
        cards={listedCards} 
        onBuyCard={handleBuyCard} 
        truncateAddress={truncateAddress}
      />
    </div>
  );
};

export default Marketplace;