import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Share2, Globe, Shield, Terminal, Zap, Cpu, Map } from 'lucide-react'
import './App.css'

const LIBRARY_ASSETS = [
  {
    id: 'lat_nash',
    category: 'GAME_THEORY',
    title: 'THE LATIN EQUILIBRIUM',
    desc: 'Analyzing collective bargaining and non-zero-sum cooperation in Latin American history. Moving from competition to synergy.',
    icon: <Globe size={24} />
  },
  {
    id: 'systemic_fragility',
    category: 'SIGNAL_SECURITY',
    title: 'THE_VULNERABILITY_OF_THE_CORE',
    desc: 'Mexico proved that when institutions centralize the many, they expose the many. Decentralization is not just tech; it is survival.',
    icon: <Terminal size={24} />
  },
  {
    id: 'arch_barragan',
    category: 'ARCHITECTURE',
    title: 'BARRAGÁN: EMOTIONAL INFRASTRUCTURE',
    desc: 'How the use of vibrant walls and deep shadows creates a "Safe Space" for the soul. The blueprint for the Integrated Enclave.',
    icon: <BookOpen size={24} />
  },
  {
    id: 'lib_signal',
    category: 'LIBERATION',
    title: 'THE SIGNAL COMMONS',
    desc: 'Reclaiming open-source intellectual property as a sovereign community asset. Defeating the feudal licensing model.',
    icon: <Share2 size={24} />
  },
  {
    id: 'sovereign_roots',
    category: 'HERITAGE',
    title: 'ANCESTRAL_NETWORK_SECURITY',
    desc: 'Exploring non-linear narrative and information security in ancestral communication systems. Encoding truth within community.',
    icon: <Shield size={24} />
  },
  {
    id: 'kernal_liberation',
    category: 'SYSTEMS',
    title: 'KERNEL_FOR_THE_MANY',
    desc: 'Bridging the gap between cultural roots and bare-metal future. Building an OS for the sovereign individual.',
    icon: <Cpu size={24} />
  },
  {
    id: 'mexico_future',
    category: 'PRO_MEXICO',
    title: 'THE_RESILIENT_NATION',
    desc: 'Beyond the hacks lies the strength of a people who have always operated in decentralized, resilient nodes.',
    icon: <Map size={24} />
  },
  {
    id: 'collective_bargaining',
    category: 'ECONOMICS',
    title: 'NON-ZERO-SUM_SYNERGY',
    desc: 'Reframing trade as a collaborative handshake. The economic blueprint for the Integrated Enclave.',
    icon: <Zap size={24} />
  }
]

function App() {
  const [liberatedIds, setLiberatedIds] = useState<string[]>([])
  
  const liberate = (id: string) => {
    if (!liberatedIds.includes(id)) {
      setLiberatedIds([...liberatedIds, id])
    }
  }

  const resonance = (liberatedIds.length / LIBRARY_ASSETS.length) * 100

  return (
    <div className="lat-container">
      <header className="lat-header">
        <div className="header-top">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            PARADA<span>.LAT</span>
          </motion.h1>
          <div className="resonance-meter">
             <div className="label">ENCLAVE_RESONANCE</div>
             <div className="bar"><div className="fill" style={{ width: `${resonance}%` }}></div></div>
             <div className="value">{resonance.toFixed(0)}%_SYNC_ACTIVE</div>
          </div>
        </div>
        <p className="subtitle">
          RECLAIMING THE LATIN INTELLECTUAL COMMONS. BARRAGÁN MINIMALISM MEETING HIGH-DENSITY SOVEREIGN ARCHIVAL.
        </p>
      </header>

      <section className="mural-block">
        <motion.div className="block-1" animate={{ height: resonance > 10 ? '100%' : '15%', opacity: resonance > 10 ? 1 : 0.4 }}></motion.div>
        <motion.div className="block-2" animate={{ height: resonance > 30 ? '100%' : '30%', opacity: resonance > 30 ? 1 : 0.4 }}></motion.div>
        <motion.div className="block-3" animate={{ height: resonance > 50 ? '100%' : '45%', opacity: resonance > 50 ? 1 : 0.4 }}></motion.div>
        <motion.div className="block-4" animate={{ height: resonance > 70 ? '100%' : '25%', opacity: resonance > 70 ? 1 : 0.4 }}></motion.div>
        <motion.div className="block-5" animate={{ height: resonance > 85 ? '100%' : '50%', opacity: resonance > 85 ? 1 : 0.4 }}></motion.div>
        <motion.div className="block-6" animate={{ height: resonance > 95 ? '100%' : '20%', opacity: resonance > 95 ? 1 : 0.4 }}></motion.div>
      </section>

      <main className="library-grid">
        {LIBRARY_ASSETS.map((asset, index) => {
          const isLiberated = liberatedIds.includes(asset.id)
          return (
            <motion.div 
              key={asset.id}
              className={`library-item ${isLiberated ? 'liberated' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="item-content">
                <div className="item-meta">
                  {isLiberated ? 'SIGNAL_LIBERATED ✓' : asset.category}
                </div>
                <div className="icon-wrap" style={{ color: isLiberated ? 'var(--barragan-yellow)' : '#333' }}>
                    {asset.icon}
                </div>
                <h2 className="item-title">{asset.title}</h2>
                <p className="item-desc">{asset.desc}</p>
                
                <button 
                  className={`liberation-btn ${isLiberated ? 'active' : ''}`}
                  onClick={() => liberate(asset.id)}
                  disabled={isLiberated}
                >
                  {isLiberated ? 'COMMONS_ESTABLISHED' : 'LIBERATE_SIGNAL'}
                </button>
              </div>
              
              <AnimatePresence>
                {isLiberated && (
                  <motion.div 
                    className="liberation-flash"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </main>

      <div className="game-theory-note">
         <h3>THE ARCHITECT'S PROMISE</h3>
         <p>The fragility of centralized state institutions is an opportunity for individual sovereignty. Mexico has always been a nation of resilient nodes. By liberating these signals, we are not just reclaiming code or architecture; we are reclaiming the right to exist in the quiet, outside the reach of extractive feudalism.</p>
      </div>

      <footer className="lat-footer">
        <p>© 2026 PIXELS AGENCY // ARCHITECT: PARADA</p>
        <p style={{marginTop: '15px', color: '#333'}}>STRENGTH IN THE COMMONS. SAFETY IN THE KERNEL. VIVA LA SOBERANÍA.</p>
      </footer>
    </div>
  )
}

export default App
