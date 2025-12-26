import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoreItem } from '../types';
import { X, BookOpen, Hash } from 'lucide-react';

interface LoreModalProps {
  item: LoreItem | null;
  onClose: () => void;
}

const LoreModal: React.FC<LoreModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#1a1a1a] border border-neutral-800 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative"
        >
          {/* Header */}
          <div className="p-6 pb-2 border-b border-neutral-800 flex justify-between items-start">
             <div>
                 <div className="flex items-center gap-2 text-tech-purple mb-2">
                     <BookOpen className="w-4 h-4" />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Community Lore</span>
                 </div>
                 <h2 className="text-2xl font-display font-bold text-white leading-tight">{item.title}</h2>
             </div>
             <button 
                onClick={onClose}
                className="p-2 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400 hover:text-white"
             >
                 <X className="w-5 h-5" />
             </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                {item.story}
            </p>
            
            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
                {item.tags?.map((tag, idx) => (
                    <span key={idx} className="flex items-center gap-1 px-3 py-1 bg-neutral-800 rounded-full text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                        <Hash className="w-3 h-3" /> {tag}
                    </span>
                ))}
            </div>
          </div>

          {/* Footer Decoration */}
          <div className="h-1.5 w-full bg-gradient-to-r from-tech-purple via-indigo-500 to-blue-500"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoreModal;
