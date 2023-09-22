
// Chess Images
import chessImage1 from '../../Media/Chess/checkmate.png';
import chessImage2 from '../../Media/Chess/chess_board.png';
import chessImage3 from '../../Media/Chess/chess_menu.png';
import chessImage4 from '../../Media/Chess/stalemate.png';

// Weather app Images
import weatherImage1 from '../../Media/WeatherApp/favorites.png';
import weatherImage2 from '../../Media/WeatherApp/new_york.png';
import weatherImage3 from '../../Media/WeatherApp/tel_aviv.png';


const projectData = [
    {
        id: 1,
        title: 'Chess',
        description: 'I developed a chess application with all standard rules implemented, along with features for backtracking moves and determining game outcomes',
        gitLink: "https://github.com/tomerwein/Chess-Game-Tomer",
        techStack: ['Python', 'Pygame', 'Backtracking'],
        images: [chessImage1, chessImage2, chessImage3 , chessImage4]
    },
    {
        id: 2,
        title: 'Weather App',
        description: 'I developed a user-friendly weather app that provides a 5-day forecast, includes a search bar for finding cities, and allows users to add or delete cities from their favorites list for quick access.',
        gitLink: "https://github.com/tomerwein/Chess-Game-Tomer",
        techStack: ['Javascript', 'ReactJS', 'Axios', 'NodeJS', 'weather API', 'images-classification'],
        images: [weatherImage1, weatherImage2, weatherImage3]
    },
    // Add more projects as needed
];

export default projectData;
