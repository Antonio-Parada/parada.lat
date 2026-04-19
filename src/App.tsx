import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Terminal, BookOpen, Share2, Shield, Cpu } from 'lucide-react'
import './App.css'

const MANIFESTO_BLOCKS = [
  {
    id: 'commons',
    category: 'THE_COMMONS',
    title: 'ARCHITECTING THE MANY',
    desc: 'Against the enclosure of the few. A critique of physical and digital land grabs driven by modern imperialism. We build infrastructure for the people, not the platform.',
    color: 'var(--barragan-pink)',
    icon: <Share2 size={28} />
  },
  {
    id: 'extraction',
    category: 'ANTI_EXTRACTION',
    title: 'SOVEREIGN INFRASTRUCTURE',
    desc: 'Silicon and soil are strip-mined equally. True liberation requires severing reliance on colonial tech monopolies and reclaiming local, pro-people routing protocols.',
    color: 'var(--barragan-yellow)',
    icon: <Cpu size={28} />
  },
  {
    id: 'emotional',
    category: 'EMOTIONAL_ARCH',
    title: 'SANCTUARY SPACES',
    desc: 'Designing for the human pulse, not machine consumption. Using minimal, stark boundaries to carve out safe spaces against the noise of algorithmic colonization.',
    color: 'var(--barragan-blue)',
    icon: <BookOpen size={28} />
  },
  {
    id: 'synergy',
    category: 'COLLECTIVISM',
    title: 'NON-ZERO-SUM',
    desc: 'Rejecting the competitive scarcity imposed by extractive capital. Trade, data, and exchange must act as a collaborative handshake, fortifying community resilience.',
    color: 'var(--barragan-orange)',
    icon: <Globe size={28} />
  },
  {
    id: 'resilience',
    category: 'SYSTEM_DEFENSE',
    title: 'DECENTRALIZED SURVIVAL',
    desc: 'Monolithic institutions expose the many to centralized failure. Distributed, sovereign nodes ensure that when the imperial core rots, the periphery thrives.',
    color: 'var(--barragan-green)',
    icon: <Shield size={28} />
  }
]

function App() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="lat-container">
      <header className="lat-header">
        <div className="header-top">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            PARADA<span>.LAT</span>
          </motion.h1>
        </div>
        <p className="subtitle">
          PRO-PEOPLE ARCHITECTURE. A CRITIQUE OF DIGITAL COLONIZATION & EXTRACTIVE MONOPOLIES.
        </p>
      </header>

      <main className="architectural-grid">
        {MANIFESTO_BLOCKS.map((block) => {
          const isHovered = hoveredId === block.id;
          
          return (
            <motion.div 
              key={block.id}
              className="arch-block"
              style={{ backgroundColor: isHovered ? block.color : 'var(--pixels-bg)' }}
              onMouseEnter={() => setHoveredId(block.id)}
              onMouseLeave={() => setHoveredId(null)}
              layout
            >
              <div className="block-content">
                <div className="block-header">
                  <div className="icon-wrap" style={{ color: isHovered ? '#000' : 'var(--pixels-text)' }}>
                    {block.icon}
                  </div>
                  <div className="block-meta" style={{ color: isHovered ? '#000' : 'var(--pixels-text-muted)' }}>
                    {block.category}
                  </div>
                </div>
                
                <h2 className="block-title" style={{ color: isHovered ? '#000' : 'var(--pixels-text)' }}>
                  {block.title}
                </h2>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      className="block-desc-wrap"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="block-desc" style={{ color: '#000' }}>
                        {block.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        })}
      </main>

      <footer className="lat-footer">
        <p>© 2026 PIXELS // SOVEREIGN ARCHITECTURE</p>
        <p className="footer-manifesto">STRENGTH IN THE COMMONS. SAFETY IN THE KERNEL.</p>
      </footer>
    </div>
  )
}

export default App
