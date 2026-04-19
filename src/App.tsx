import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Share2, Globe, Shield } from 'lucide-react'
import './App.css'

const LIBRARY_ASSETS = [
  {
    id: 'lat_nash',
    category: 'GAME_THEORY',
    title: 'THE LATIN EQUILIBRIUM',
    desc: 'Analyzing collective bargaining and non-zero-sum cooperation in Latin American trade history. Moving from competition to synergy.',
    icon: <Globe size={20} />
  },
  {
    id: 'arch_barragan',
    category: 'ARCHITECTURE',
    title: 'BARRAGÁN: EMOTIONAL INFRASTRUCTURE',
    desc: 'How the use of vibrant walls and deep shadows creates a "Safe Space" for the soul. The blueprint for the Integrated Enclave.',
    icon: <BookOpen size={20} />
  },
  {
    id: 'lib_signal',
    category: 'LIBERATION',
    title: 'THE SIGNAL COMMONS',
    desc: 'Reclaiming open-source intellectual property as a sovereign community asset. Defeating the feudal licensing model.',
    icon: <Share2 size={20} />
  },
  {
    id: 'sovereign_roots',
    category: 'HERITAGE',
    title: 'INDIGENOUS CRYPTOGRAPHY',
    desc: 'Exploring non-linear narrative and information security in ancestral Latin American communication systems.',
    icon: <Shield size={20} />
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
          >
            PARADA<span>.LAT</span>
          </motion.h1>
          <div className="resonance-meter">
             <div className="label">ENCLAVE_RESONANCE</div>
             <div className="bar"><div className="fill" style={{ width: `${resonance}%` }}></div></div>
             <div className="value">{resonance.toFixed(0)}%_SYNC</div>
          </div>
        </div>
        <p className="subtitle">
          THE LIBERATION OF LIBRARIES // DECENTRALIZING THE LATIN INTELLECTUAL COMMONS.
        </p>
      </header>

      <section className="mural-block">
        <motion.div 
          className="block-1" 
          animate={{ height: resonance > 25 ? '100%' : '20%' }}
        ></motion.div>
        <motion.div 
          className="block-2" 
          animate={{ height: resonance > 50 ? '100%' : '40%' }}
        ></motion.div>
        <motion.div 
          className="block-3" 
          animate={{ height: resonance > 75 ? '100%' : '60%' }}
        ></motion.div>
      </section>

      <main className="library-grid">
        {LIBRARY_ASSETS.map((asset, index) => {
          const isLiberated = liberatedIds.includes(asset.id)
          return (
            <motion.div 
              key={asset.id}
              className={`library-item ${isLiberated ? 'liberated' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="item-content">
                <div className="item-meta">
                  {isLiberated ? 'SIGNAL_LIBERATED ✓' : asset.category}
                </div>
                <div className="icon-wrap">{asset.icon}</div>
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
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    exit={{ height: 0 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </main>

      <div className="game-theory-note">
         <h3>NON-ZERO-SUM PROTOCOL</h3>
         <p>In this enclave, the liberation of one signal increases the utility of the many. We are establishing a Nash Equilibrium where the quiet is more valuable than the noise. Reclaiming the Latin roots means reclaiming the right to collaborate without middlemen.</p>
      </div>

      <footer className="lat-footer">
        <p>© 2026 PIXELS AGENCY // ARCHITECT: PARADA</p>
        <p style={{marginTop: '10px'}}>KNOWLEDGE IS A SOVEREIGN ASSET.</p>
      </footer>
    </div>
  )
}

export default App
