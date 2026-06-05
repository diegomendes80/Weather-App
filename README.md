# Weather App

Aplicação web desenvolvida com React e Vite para consulta de condições climáticas em qualquer cidade utilizando a API Open-Meteo.

## Funcionalidades

- Busca de cidades por nome
- Consulta de temperatura atual
- Sensação térmica
- Umidade do ar
- Velocidade do vento
- Precipitação
- Condição climática atual
- Previsão para os próximos dias
- Interface responsiva

## Tecnologias Utilizadas

- React
- Vite
- Sass (SCSS)
- Open-Meteo API
- Open-Meteo Geocoding API

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/diegomendes80/Weather-App.git
```

Entre na pasta do projeto:

```bash
cd Weather-App
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

A aplicação ficará disponível em:

```text
http://localhost:5173
```

## Estrutura do Projeto

```text
src
├── components
├── services
├── abstract
├── App.jsx
└── main.jsx
```

## APIs Utilizadas

### Geocoding API

Responsável por converter o nome da cidade em coordenadas geográficas.

```http
https://geocoding-api.open-meteo.com/v1/search
```

### Forecast API

Responsável por fornecer os dados meteorológicos.

```http
https://api.open-meteo.com/v1/forecast
```

## Status do Projeto

A aplicação já realiza a busca de cidades e exibe os principais dados climáticos atuais, além da previsão diária.

Atualmente ainda está pendente a integração dos dados horários reais da API para alimentar a seção de previsão hora a hora. Por enquanto essa área utiliza dados de exemplo para fins de desenvolvimento e testes da interface.

## Melhorias Futuras

- Implementação completa da previsão horária
- Conversão dos códigos climáticos da Open-Meteo para descrições mais amigáveis
- Ícones dinâmicos de acordo com a condição do tempo
- Suporte a localização automática do usuário
- Histórico de pesquisas recentes

## Deploy

Projeto disponível em:

```text
(https://weather-app-beige-six-78.vercel.app/)
```

## Autor

Diego Mendes
