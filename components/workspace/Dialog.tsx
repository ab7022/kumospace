
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const Dialog = ({
  isOpen,
  onClose,
  children,
  title = '',
  showCloseButton = true,
}:any) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e:any) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e:any) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl border border-white/10 animate-dialog-appear">
        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          {title && (
            <h2 
              id="dialog-title"
              className="text-3xl font-bold text-white text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
            >
              {title}
            </h2>
          )}
          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Add these keyframes to your global CSS file
const globalStyles = `
@keyframes dialogAppear {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-dialog-appear {
  animation: dialogAppear 0.2s ease-out;
}
`;

export default Dialog;