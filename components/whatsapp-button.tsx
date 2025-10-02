"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';

const openWhatsApp = () => {
  const message = encodeURIComponent('Hi HappyCraft Events! I’d like to know more about your event management services.');
  const phoneNumber = '+919903622236';
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};

const WhatsAppButton = () => {
  const [showText, setShowText] = useState(true);

  return (
    <div className="fixed z-[30] bottom-5 right-4 flex flex-col items-end">
      {/* Chat us text with cross */}
      {showText && (
        <div className="flex items-center gap-2 mb-3 bg-white rounded-full px-3 py-1 shadow-md border border-gray-200">
          <span className="text-sm font-medium text-gray-700">Chat us</span>
          <button
            onClick={() => setShowText(false)}
            className="text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Hide chat text"
          >
            <X className="h-4 w-4 cursor-pointer" />
          </button>
        </div>
      )}

      {/* WhatsApp Icon Button */}
      <button
        onClick={openWhatsApp}
        className="cursor-pointer animate-bounce"
      >
        {/* WhatsApp Logo */}
        <img
          src="socials/whatsapp.png"
          alt="WhatsApp Logo"
          width="40"
          height="40"
          draggable={false}
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;
