import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Share2, Globe, Shield, Terminal, Zap } from 'lucide-react'
import './App.css'

const LIBRARY_ASSETS = [
  {
    id: 'lat_nash',
    category: 'GAME_THEORY',
    title: 'THE LATIN EQUILIBRIUM',
    desc: 'Analyzing non-zero-sum cooperation in Latin American history. Shifting from extractive competition to synergistic liberation.',
    icon: <Globe size={20} />
  },
  {
    id: 'mexico_hack',
    category: 'CYBER_SECURITY',
    title: 'CENTRALIZED_FAILURE: THE 2022 LEAKS',
    desc: 'Analyzing the vulnerability of centralized state systems. When the core is hacked, the many are exposed. The argument for the Enclave.',
    icon: <Terminal size={20} />
  },
  {
    id: 'sovereign_roots',
    category: 'SIGNAL_SECURITY',
    title: 'ANCESTRAL_SIGNAL_RESILIENCE',
    desc: 'Reclaiming the logic of non-linear communication. Encoding truth within the knots of community resilience.',
    icon: <Shield size={20} />
  },
  {
    id: 'lib_signal',
    category: 'LIBERATION',
    title: 'THE SIGNAL COMMONS',
    desc: 'Reclaiming intellectual property as a collective asset. Defeating the feudal licensing model through sovereign code.',
    icon: <Share2 size={20} />
  },
  {
    id: 'architect_manifesto',
    category: 'MANIFESTO',
    title: 'THE LIBERATION OF THE MANY',
    desc: 'From the lens to the kernel. Why the Architect must build for the sovereign individual, not the feudal institution.',
    icon: <Zap size={20} />
  },
  {
    id: 'arch_barragan',
    category: 'ARCHITECTURE',
    title: 'EMOTIONAL INFRASTRUCTURE',
    desc: 'Utilizing Barragán minimalism to create safe digital spaces. Reclaiming the quiet as a human right.',
    icon: <BookOpen size={20} />
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
          RECLAIMING THE LATIN INTELLECTUAL COMMONS // THE BLUEPRINT FOR LIBERATED SIGNALS.
        </p>
      </header>

      <section className="mural-block">
        <motion.div 
          className="block-1" 
          animate={{ height: resonance > 20 ? '100%' : '15%' }}
        ></motion.div>
        <motion.div 
          className="block-2" 
          animate={{ height: resonance > 40 ? '100%' : '30%' }}
        ></motion.div>
        <motion.div 
          className="block-3" 
          animate={{ height: resonance > 60 ? '100%' : '45%' }}
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
                  {isLiberated ? 'COMMONS_ACTIVE ✓' : asset.category}
                </div>
                <div className="icon-wrap">{asset.icon}</div>
                <h2 className="item-title">{asset.title}</h2>
                <p className="item-desc">{asset.desc}</p>
                
                <button 
                  className={`liberation-btn ${isLiberated ? 'active' : ''}`}
                  onClick={() => liberate(asset.id)}
                  disabled={isLiberated}
                >
                  {isLiberated ? 'SIGNAL_ESTABLISHED' : 'LIBERATE_SIGNAL'}
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
         <h3>THE ENCLAVE VS THE STATE</h3>
         <p>The 2022 hacking of Mexican centralized institutions proved that massive, monolithic entities are fragile. The security of the many depends on the sovereignty of the individual. Our Non-Zero-Sum Protocol establishes small, interconnected, highly-resilient enclaves. By liberating these signals, you are encoding a new baseline of safety.</p>
      </div>

      <footer className="lat-footer">
        <p>© 2026 PIXELS AGENCY // ARCHITECT: PARADA</p>
        <p style={{marginTop: '10px'}}>STRENGTH IN THE COMMONS. SAFETY IN THE KERNEL.</p>
      </footer>
    </div>
  )
}

export default App
