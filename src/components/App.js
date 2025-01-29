// src/components/ui/alert-dialog.js
import React from 'react';

export const AlertDialog = ({ open, children }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full">
        {children}
      </div>
    </div>
  );
};

export const AlertDialogContent = ({ children }) => {
  return <div className="p-6">{children}</div>;
};

export const AlertDialogHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export const AlertDialogTitle = ({ children }) => {
  return <h2 className="text-xl font-bold mb-2">{children}</h2>;
};

export const AlertDialogDescription = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const AlertDialogAction = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
    >
      {children}
    </button>
  );
};
