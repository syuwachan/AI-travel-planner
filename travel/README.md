# Travel Destination Personality Quiz

A fun and interactive web application that helps users discover their ideal travel destination in Japan based on their personality and preferences.

## Overview

This application presents users with a series of 10 questions about their travel preferences, lifestyle choices, and interests. Based on their answers, it recommends the perfect Japanese destinations that match their personality.

## Features

- **Personality Quiz**: 10 carefully crafted questions to understand travel preferences
- **Smart Recommendation System**: Analyzes responses to suggest personalized destinations
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Beautiful UI**: Clean, modern design with a nature-inspired color scheme

## Tech Stack

- **Framework**: Next.js 15.4.4
- **React**: 19.1.0
- **State Management**: Zustand 5.0.6
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd travel
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint to check code quality

## Project Structure

```
travel/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout component
│   │   ├── page.tsx         # Home page
│   │   ├── question/        # Quiz page
│   │   └── result/          # Results page
│   ├── components/
│   │   ├── QuestionCard.tsx # Question display component
│   │   └── ResultCard.tsx   # Result display component
│   ├── lib/
│   │   ├── questions.ts     # Quiz questions data
│   │   ├── resultLogic.ts   # Answer processing logic
│   │   └── tagToDestinations.ts # Destination mapping
│   └── store/
│       └── useAnswerStore.ts # Global state management
├── package.json
└── README.md
```

## How It Works

1. **Start Screen**: Users are welcomed with an engaging prompt to begin the quiz
2. **Questions**: Each question has 3 options, tagged with categories like:
   - `relax` - For those seeking relaxation
   - `active` - For adventure seekers
   - `urban` - For city lovers
   - `nature` - For nature enthusiasts
   - `culture` - For culture appreciators
   - `photogenic` - For photography enthusiasts

3. **Results**: Based on the most selected tags, users receive personalized destination recommendations from various Japanese locations including:
   - Hot spring towns (Hakone, Yufuin)
   - Adventure destinations (Hakuba, Yakushima)
   - Urban centers (Tokyo, Osaka)
   - Nature spots (Kamikochi, Shiretoko)
   - Cultural cities (Kyoto, Kanazawa)
   - Photogenic locations (Naoshima, Kamakura)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.
