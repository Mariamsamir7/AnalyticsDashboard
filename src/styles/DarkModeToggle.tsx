// src/components/DarkModeToggle.tsx
import React from 'react';

interface DarkModeToggleProps {
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;