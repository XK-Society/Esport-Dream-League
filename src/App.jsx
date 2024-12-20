import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Marketplace from "./pages/Marketplace";
import Checkin from "./pages/Checkin";
import Manager from "./pages/Manager";
import Battle from "./pages/Battle";
import Home from "./pages/Home";
import ParticlesBackground from "./components/ParticlesBackground";
import Footer from "./components/Footer";

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = "https://rpc.devnet.soo.network/rpc";

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network })
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <ParticlesBackground />
              <Navbar />
              <main className="pt-16 relative z-10 flex-grow">
                <div className="container mx-auto px-4 py-8">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/checkin" element={<Checkin />} />
                    <Route path="/battle" element={<Battle />} />
                    <Route path="/manager" element={<Manager />} />
                  </Routes>
                </div>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;