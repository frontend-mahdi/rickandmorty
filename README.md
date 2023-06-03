# Rick and Morty

> A React + TypeScript + Vite app that lists characters from the Rick and Morty anime using the GraphQL API.

## Live Demo

Check out the live demo of the app hosted on Netlify: [https://rickandmorty432.netlify.app/](https://rickandmorty432.netlify.app/)

## Folder and File Structure

```plaintext
.
├── dist
│   └── ...
├── src
│   ├── features
│   │   └── ...
│   ├── layouts
│   │   └── ...
│   ├── pages
│   │   └── ...
│   ├── router
│   │   └── ...
│   └── services
│       ├── api
│       │   ├── characters.ts
│       │   └── query
│       │       └── characters.query.ts
│       ├── model
│       │   └── characters.model.ts
│       └── reducers
│           └── panel.ts
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts

```

## Installation

To run the project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies using the following command:

```plaintext
npm install
```

3. Start the development server:

```plaintext
npm run dev
```

## Technologies Used

- React
- TypeScript
- Vite
- Redux Toolkit
- Tailwind CSS
- RTK Query
- GraphQL

## Features

- Fetches and displays a list of characters from the Rick and Morty anime.
- Lazy loads images for better performance.
- Responsive layout with grid for optimal display on different screen sizes.
- Hover effects and card animations for enhanced user experience.

## Usage

1. Upon launching the app, you will see a grid of character cards.
2. Each card displays the character's image, name, and additional details.
3. Scroll down to load more characters automatically.
4. Click on a card to view more information about the character.
5. Use the search functionality to filter characters by name.
6. Enjoy exploring the characters from the Rick and Morty universe!

## API Integration

The app integrates with the Rick and Morty GraphQL API to fetch character data. The `characters.ts` file in the `services/api` directory contains the API endpoint configuration and query definitions.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, feel free to reach out:

- Email: mahdi.313.ab@gmail.com
- Twitter: [@frontend_mahdi](https://twitter.com/frontend_mahdi)
- GitHub: [frontend-mahdi](https://github.com/frontend-mahdi)
