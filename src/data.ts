import { Product, Recipe, EducationalArticle } from './types';

export const STORE_CATEGORIES: string[] = [
  'Grãos',
  'Temperos',
  'Chás',
  'Farinhas',
  'Castanhas',
  'Sementes'
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Castanha do Pará Premium',
    description: 'Castanhas do Pará inteiras selecionadas do oeste, ricas em gorduras boas, fósforo e potentes antioxidantes.',
    benefits: ['Poderoso antioxidante natural', 'Auxilia no controle do colesterol', 'Excelente fonte de selênio biodisponível'],
    category: 'Castanhas',
    pricePer100g: 11.90,
    rating: 4.9,
    reviews: [
      { id: 'rev-1', userName: 'Ana Paula S.', rating: 5, comment: 'Pedi 500g e a crocância está perfeita. Recomendo muito!', date: '2026-05-15' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=600',
    origin: 'Pará, Brasil',
    nutritionalInfo: { calories: '656 kcal', carbs: '12g', protein: '14g', fat: '66g', fiber: '7g' },
    isVegan: true,
    isFitness: true,
    isGlutenFree: true
  },
  {
    id: 'prod-2',
    name: 'Spirulina Azul em Pó',
    description: 'Superalimento azul extraído de microalgas puras. Incrível teor de ferro, antioxidantes e proteínas vegetais.',
    benefits: ['Rica em ferro e fito-nutrientes', 'Modulação imunológica ativa', 'Excelente fonte de Vitamina B12'],
    category: 'Sementes',
    pricePer100g: 24.50,
    rating: 4.8,
    reviews: [
      { id: 'rev-2', userName: 'Lucas M.', rating: 5, comment: 'Uso no meu shot matinal todos os dias, energia de alta qualidade.', date: '2026-05-14' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600',
    origin: 'Ceará, Brasil',
    nutritionalInfo: { calories: '290 kcal', carbs: '24g', protein: '57g', fat: '8g', fiber: '3.6g' },
    isVegan: true,
    isFitness: true,
    isGlutenFree: true
  },
  {
    id: 'prod-3',
    name: 'Cúrcuma Pura Ativa',
    description: 'Cúrcuma da terra seca e moída artesanalmente. Concentração máxima de curcumina para excelente ação anti-inflamatória.',
    benefits: ['Potente ação anti-inflamatória', 'Auxilia na digestão inteligente', 'Suporte à imunidade das articulações'],
    category: 'Temperos',
    pricePer100g: 5.90,
    rating: 4.9,
    reviews: [],
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600',
    origin: 'Minas Gerais, Brasil',
    nutritionalInfo: { calories: '354 kcal', carbs: '65g', protein: '8g', fat: '10g', fiber: '21g' },
    isVegan: true,
    isFitness: true,
    isGlutenFree: true
  },
  {
    id: 'prod-4',
    name: 'Semente de Chia Negra Premium',
    description: 'Grãos de sementes selecionadas de chia negra. Excelente fonte vegetal de ômega-3, cálcio vegetal e fibras solúveis.',
    benefits: ['Altíssima densidade de fibras', 'Fonte rica de Ômega 3 vegetal', 'Auxilia na saciedade e saúde do cólon'],
    category: 'Sementes',
    pricePer100g: 4.80,
    rating: 4.7,
    reviews: [],
    imageUrl: 'https://images.unsplash.com/photo-1584949514123-47cb2320b998?auto=format&fit=crop&q=80&w=600',
    origin: 'Região Sul, Brasil',
    nutritionalInfo: { calories: '486 kcal', carbs: '42g', protein: '17g', fat: '31g', fiber: '34g' },
    isVegan: true,
    isFitness: true,
    isGlutenFree: true
  },
  {
    id: 'prod-5',
    name: 'Nozes Chilenas Quartz Extra-Light',
    description: 'Nozes sem casca selecionadas na categoria Quartz Extra-Light. Óleo natural revigorante e sabor adocicado.',
    benefits: ['Saúde cerebral potencializada', 'Proteção cardiovascular ativa', 'Rica em ômega 3 e ômega 6'],
    category: 'Castanhas',
    pricePer100g: 13.50,
    rating: 5.0,
    reviews: [],
    imageUrl: 'https://images.unsplash.com/photo-1608797178974-15b35a61d121?auto=format&fit=crop&q=80&w=600',
    origin: 'Valparaíso, Chile',
    nutritionalInfo: { calories: '654 kcal', carbs: '14g', protein: '15g', fat: '65g', fiber: '7g' },
    isVegan: true,
    isFitness: true,
    isGlutenFree: true
  },
  {
    id: 'prod-6',
    name: 'Chá Vermelho Flor de Hibisco',
    description: 'Cálices secos de Hibiscus Sabdariffa. Colheita manual, aroma frutado sofisticado e ação altamente diurética natural.',
    benefits: ['Excelente regulador de retenção de líquidos', 'Promove relaxamento e calma vascular', 'Rico em Vitamina C ativa'],
    category: 'Chás',
    pricePer100g: 7.20,
    rating: 4.9,
    reviews: [],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',
    origin: 'Bahia, Brasil',
    nutritionalInfo: { calories: '37 kcal', carbs: '7g', protein: '0.4g', fat: '0.6g', fiber: '0.3g' },
    isVegan: true,
    isFitness: true,
    isGlutenFree: true
  }
];

export const INITIAL_RECIPES: Recipe[] = [
  {
    id: 'rec-1',
    title: 'Super Shot Matinal Detox com Spirulina',
    prepTime: '5 min',
    difficulty: 'Fácil',
    calories: '45 kcal',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600',
    ingredients: [
      { name: 'Spirulina Azul em Pó', amount: '1 colher de café', isAvailableInStore: true, productId: 'prod-2' },
      { name: 'Limão Siciliano Fresco', amount: 'Metade espremida', isAvailableInStore: false },
      { name: 'Água Morna Filtrada', amount: '100ml', isAvailableInStore: false }
    ],
    instructions: [
      'Misture bem a Spirulina Azul em Pó com os 100ml de água morna em um copo.',
      'Esprema a metade do limão siciliano por cima.',
      'Mexa continuamente até dissolver totalmente e beba em jejum energético logo ao acordar.'
    ]
  },
  {
    id: 'rec-2',
    title: 'Bowl Funcional de Chia com Nozes e Morango',
    prepTime: '15 min',
    difficulty: 'Fácil',
    calories: '280 kcal',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=600',
    ingredients: [
      { name: 'Semente de Chia Negra Premium', amount: '2 colheres de sopa', isAvailableInStore: true, productId: 'prod-4' },
      { name: 'Leite de Amêndoas ou Coco', amount: '150ml', isAvailableInStore: false },
      { name: 'Nozes Chilenas Quartz Extra-Light', amount: '30g picadas', isAvailableInStore: true, productId: 'prod-5' },
      { name: 'Morangos Fresco Fatiados', amount: '5 unidades', isAvailableInStore: false }
    ],
    instructions: [
      'Coloque a chia negra em um pote junto ao leite vegetal escolhido.',
      'Misture bem e deixe descansar por 10 minutos para formar uma consistência de pudim.',
      'Por cima, adicione as nozes chilenas Quartz finamente picadas e as rodelas de morangos.',
      'Adoce levemente se achar necessário e desfrute de um café da manhã rico em fibras!'
    ]
  }
];

export const EDUCATIONAL_ARTICLES: EducationalArticle[] = [
  {
    id: 'art-1',
    title: 'Os Poderes Anti-inflamatórios da Cúrcuma Curcumina',
    subtitle: 'Evidências científicas de um tempero secular',
    category: 'Suplementação',
    summary: 'A cúrcuma ativa atua no combate ao estresse oxidativo das células de forma natural.',
    content: [
      'A curcumina, ingrediente ativo principal do açafrão-da-terra, é amplamente conhecida por estudos científicos devido ao seu alto poder antioxidante.',
      'Para otimizar em 2000% a absorção de curcumina pelas mucosas digestivas do corpo humano, os nutricionistas recomendam combiná-la com pitadas de pimenta preta (piperina).'
    ],
    tips: ['Adicione sempre cúrcuma e pimenta-do-reino juntas nos seus ensopados.'],
    tags: ['Imunidade', 'Antioxidante', 'Anti-inflamatório'],
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600'
  }
];
