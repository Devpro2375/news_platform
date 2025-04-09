export type TranslationKey = 
  | 'app.title'
  | 'app.subtitle'
  | 'nav.home'
  | 'nav.news'
  | 'nav.about'
  | 'nav.settings'
  | 'filter.sdg'
  | 'filter.sentiment'
  | 'language.en'
  | 'language.es'
  | 'language.fr'
  | 'language.hi'
  | 'language.zh';

export type Language = 'en' | 'es' | 'fr' | 'hi' | 'zh';

export type Translations = Record<Language, Record<TranslationKey, string>>;
