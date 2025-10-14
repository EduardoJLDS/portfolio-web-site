import { useContext } from 'react';
import { LanguageContext, LanguageContextType } from './LanguageProvider';

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}