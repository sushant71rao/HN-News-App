# Hacker News Post Viewer

Hacker News Post Viewer is a web app that allows users to search for Hacker News posts and view details of each post. It leverages the HN Search API to provide a seamless searching and viewing experience.

## Features

- **Search Functionality:** The home screen provides a search field where users can enter their queries. Upon entering a query, the app triggers the HN Search API to retrieve relevant posts.

- **Search Results:** The search results are displayed below the search field, listing posts that match the user's query.

- **Post Details:** Clicking on a search result takes the user to the post detail screen. The app uses the objectID obtained from the search results to call the Get item API, fetching post details.

- **Post Detail Screen:** On the detail screen, users can view the following information:
  - **Title:** The title of the selected Hacker News post.
  - **Points:** The number of points (upvotes) the post has received.
  - **Comments:** A list of all comments associated with the post, displayed using the "children" field from the API response.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sushant71rao/HN-News-App.git
   ```

2. Change to the project directory:

   ```bash
   cd HN-News-App
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and access the app at `http://localhost:5173`.

## Dependencies

This project relies on the following dependencies:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- Material-UI: A popular React UI framework for building attractive and responsive user interfaces.
- React Router DOM: A library for handling routing and navigation in React applications.
- [HN Search API](https://hn.algolia.com/api): The Hacker News API used for searching and retrieving post details.

## Usage

1. On the home screen, use the search field to enter your query.
2. Press Enter or click the search button to trigger the search.
3. Browse the search results and click on a post to view its details.
4. On the detail screen, you can see the post title, points, and a list of comments.

## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the project still works.
4. Create a pull request, describing your changes and their purpose.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The app was developed using the [Hacker News API](https://hn.algolia.com/api).
- Thanks to the React community for providing an excellent JavaScript library for building user interfaces.

## Contact

If you have any questions or need assistance, feel free to reach out to raosushant71@gmail.com.

Enjoy using Hacker News Post Viewer!

---

Feel free to customize this template to include additional information about your project or make it more specific to your implementation.
