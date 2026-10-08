// Dados centrais da clínica. Tudo que precisa de confirmação está marcado com [CONFIRMAR].

const whatsappNumber = '554891295514';
const whatsappText = 'Olá! Vim pelo site e gostaria de agendar uma avaliação.';

export const site = {
  name: 'Salute Odontologia',
  slogan: 'Odontologia com excelência, comprometimento e amor.',
  dentist: 'Dra. Maria Eduarda Patussi',
  cro: 'CRO-SC 20.009',
  phoneDisplay: '(48) 9129-5514',
  phoneE164: '+554891295514',
  whatsapp: `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappText)}`,
  instagram: 'https://www.instagram.com/salute.odontologia/',
  instagramHandle: '@salute.odontologia',
  instagramDentist: 'https://www.instagram.com/dentista_mariaeduarda/',
  maps: 'https://maps.app.goo.gl/sKtxVGqnkeDHXNpR8',
  mapsEmbed:
    'https://www.google.com/maps?q=Salute+Odontologia,+R.+da+Esperan%C3%A7a,+Ibiraquera,+Imbituba+-+SC&ll=-28.1350645,-48.6735653&z=15&output=embed',
  address: {
    street: 'R. da Esperança', // [CONFIRMAR] número
    neighborhood: 'Ibiraquera',
    city: 'Imbituba',
    state: 'SC',
    zip: '88780-000',
  },
  geo: { lat: -28.1350645, lng: -48.6735653 },
  hours: 'Atendimento com hora marcada',
  rating: { value: '5,0', count: 34 },
} as const;
