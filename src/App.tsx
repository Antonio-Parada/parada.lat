import { motion } from 'framer-motion'
import './App.css'

const LIBRARY_ASSETS = [
  {
    id: 'arch_01',
    category: 'ARCHITECTURE',
    title: 'THE SILENT RECLAMATION',
    desc: 'An exploration of Luis Barragán’s use of emotional space. Mapping the transition from physical blocks to digital kernels.'
  },
  {
    id: 'econ_01',
    category: 'ECONOMICS',
    title: 'THE SOVEREIGN EQUILIBRIUM',
    desc: 'Analyzing the game theory of non-zero-sum interactions in digital enclaves. Escaping the feudal debt cycle.'
  },
  {
    id: 'phil_01',
    category: 'PHILOSOPHY',
    title: 'THE DOJO OF RESILIENCE',
    desc: 'A manifesto on establishing internal infrastructure when external roofs are fragile. The ethics of the quiet.'
  },
  {
    id: 'lat_01',
    category: 'LATIN_SIGNAL',
    title: 'MURAL OF COMMITS',
    desc: 'Tracing the intellectual property of the Latin diaspora. Reclaiming the narrative from centralized institutions.'
  }
]

function App() {
  return (
    <div className="lat-container">
      <header className="lat-header">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          PARADA<span>.LAT</span>
        </motion.h1>
        <p style={{fontSize: '14px', fontWeight: '500', color: '#666'}}>
          THE LIBERATION OF LIBRARIES // SIGNAL_MURAL_V1
        </p>
      </header>

      <section className="mural-block">
        <div className="block-1"></div>
        <div className="block-2"></div>
        <div className="block-3"></div>
      </section>

      <main className="library-grid">
        {LIBRARY_ASSETS.map((asset, index) => (
          <motion.div 
            key={asset.id}
            className="library-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="item-meta">{asset.category}</div>
            <h2 className="item-title">{asset.title}</h2>
            <p className="item-desc">{asset.desc}</p>
            <button className="liberation-btn">LIBERATE_SIGNAL</button>
          </motion.div>
        ))}
      </main>

      <footer style={{padding: '100px 40px', borderTop: '1px solid #1a1a1a'}}>
        <p style={{fontSize: '10px', color: '#444'}}>© 2026 PIXELS AGENCY // ARCHITECT: PARADA</p>
        <p style={{fontSize: '10px', color: '#444', marginTop: '10px'}}>RECLAIMING THE COMMONS.</p>
      </footer>
    </div>
  )
}

export default App
