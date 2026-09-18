import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { AppProvider } from './context/ui-context.js';

const container = document.getElementById('root');
if (!container) throw new Error('找不到游戏根节点 #root');

createRoot(container).render(
  <AppProvider><App /></AppProvider>
);
