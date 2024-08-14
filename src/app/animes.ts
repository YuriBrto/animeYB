export interface IAnimes {
    id: number;
    descricao: string;
    miniDescricao: string;
    quantidadeEps:number;
    imagem: string;
    genero: string;
}

export interface IProdutoCarrinho extends IAnimes{
  quantidade:number;
}

export const animes: IAnimes[] = [
  { id: 3, descricao: "Demon slayer", quantidadeEps: 1, miniDescricao: "Em Kimetsu no Yaiba, Tanjiro, um bondoso jovem que ganha a vida vendendo carvão descobre que sua família foi massacrada por um demônio. E, para piorar, Nezuko, sua irmã mais nova e única sobrevivente, também acabou transformada em um demônio.", imagem: "./assets/tanjiro.jpeg" , genero:"Ação e aventura"},
    { id: 2, descricao: "Shingeki no kyojin", quantidadeEps: 7, miniDescricao: "É ambientado em um mundo onde a humanidade vive dentro de cidades cercadas por três enormes muralhas que os protegem dos gigantescos humanóides devoradores de humanos chamados de Titãs; a história segue Eren Jaeger, que jura exterminar os Titãs, após um Titã causar a destruição de sua cidade natal e a morte de sua mãe.", imagem: "./assets/shingeki.jpeg" , genero:"Ação e mistério"},
    { id: 1, descricao: "Nanatsu no taizai", quantidadeEps: 43, miniDescricao: "A princesa Elizabeth Liones decide, então, pedir ajuda aos Sete Pecados Mortais, um grupo de cavaleiros que, no passado, foi acusado de conspirar contra a família real e acabou desertando. Agora, eles precisam se unir para recuperar o trono e desmascarar os verdadeiros traidores.", imagem: "./assets/nanatsu.jpeg" , genero:"Fantasia e ação"}, 
    { id: 4, descricao: "Baki - O Campeão", quantidadeEps: 59, miniDescricao: "Enquanto o campeão de artes marciais Baki Hanma treina duro para superar seu lendário pai, cinco condenados à pena de morte partem para Tóquio para acabar com ele. Assista o quanto quiser.", imagem: "../assets/baki.jpeg" , genero:"Ação e artes marciais"},
    { id: 5, descricao: "Naruto", quantidadeEps: 27, miniDescricao: "Naruto (ナルト) é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.", imagem: "./assets/naruto.jpeg" , genero:"Ação e aventura"},
    { id: 6, descricao: "One punch man", quantidadeEps: 399, miniDescricao: "One Punch-Man conta a história de Saitama, um super-herói extremamente poderoso, que se entediou com a ausência dos desafios nas suas lutas contra o mal e procura encontrar um oponente digno. Capa do primeiro volume de One Punch-Man, manga adaptado por Yusuke Murata, mostrando o protagonista Saitama.", imagem: "./assets/saitama.jpeg" , genero:"Ação e artes marciais"},
    { id: 7, descricao: "Your name", quantidadeEps: 48, miniDescricao: "Assim começa a fascinante história de dois jovens cujos caminhos nunca deveriam ter se cruzado. Compartilhando corpos, relacionamentos e vidas, eles se tornam inextricavelmente ligados ― mas há conexões verdadeiramente indestrutíveis na grande tapeçaria do destino?", imagem: "./assets/yname.jpeg" , genero: "Romance e mistério"},
    { id: 3, descricao: "Demon slayer", quantidadeEps: 1, miniDescricao: "Em Kimetsu no Yaiba, Tanjiro, um bondoso jovem que ganha a vida vendendo carvão descobre que sua família foi massacrada por um demônio. E, para piorar, Nezuko, sua irmã mais nova e única sobrevivente, também acabou transformada em um demônio.", imagem: "./assets/tanjiro.jpeg" , genero:"Ação e aventura"},
    { id: 2, descricao: "Shingeki no kyojin", quantidadeEps: 7, miniDescricao: "É ambientado em um mundo onde a humanidade vive dentro de cidades cercadas por três enormes muralhas que os protegem dos gigantescos humanóides devoradores de humanos chamados de Titãs; a história segue Eren Jaeger, que jura exterminar os Titãs, após um Titã causar a destruição de sua cidade natal e a morte de sua mãe.", imagem: "./assets/shingeki.jpeg" , genero:"Ação e mistério"},
    { id: 1, descricao: "Nanatsu no taizai", quantidadeEps: 43, miniDescricao: "A princesa Elizabeth Liones decide, então, pedir ajuda aos Sete Pecados Mortais, um grupo de cavaleiros que, no passado, foi acusado de conspirar contra a família real e acabou desertando. Agora, eles precisam se unir para recuperar o trono e desmascarar os verdadeiros traidores.", imagem: "./assets/nanatsu.jpeg" , genero:"Fantasia e ação"}, 
    { id: 4, descricao: "Baki - O Campeão", quantidadeEps: 59, miniDescricao: "Enquanto o campeão de artes marciais Baki Hanma treina duro para superar seu lendário pai, cinco condenados à pena de morte partem para Tóquio para acabar com ele. Assista o quanto quiser.", imagem: "../assets/baki.jpeg" , genero:"Ação e artes marciais"},
    { id: 5, descricao: "Naruto", quantidadeEps: 27, miniDescricao: "Naruto (ナルト) é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.", imagem: "./assets/naruto.jpeg" , genero:"Ação e aventura"},
    { id: 6, descricao: "One punch man", quantidadeEps: 399, miniDescricao: "One Punch-Man conta a história de Saitama, um super-herói extremamente poderoso, que se entediou com a ausência dos desafios nas suas lutas contra o mal e procura encontrar um oponente digno. Capa do primeiro volume de One Punch-Man, manga adaptado por Yusuke Murata, mostrando o protagonista Saitama.", imagem: "./assets/saitama.jpeg" , genero:"Ação e artes marciais"},
    { id: 7, descricao: "Your name", quantidadeEps: 48, miniDescricao: "Assim começa a fascinante história de dois jovens cujos caminhos nunca deveriam ter se cruzado. Compartilhando corpos, relacionamentos e vidas, eles se tornam inextricavelmente ligados ― mas há conexões verdadeiramente indestrutíveis na grande tapeçaria do destino?", imagem: "./assets/yname.jpeg" , genero: "Romance e mistério"}
   
]
