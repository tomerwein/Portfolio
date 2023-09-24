
// Chess Images
import chessImage1 from '../../Media/Chess/checkmate.png';
import chessImage2 from '../../Media/Chess/chess_board.png';
import chessImage3 from '../../Media/Chess/chess_menu.png';
import chessImage4 from '../../Media/Chess/stalemate.png';

// Weather app Images
import weatherImage1 from '../../Media/WeatherApp/favorites.png';
import weatherImage2 from '../../Media/WeatherApp/new_york.png';
import weatherImage3 from '../../Media/WeatherApp/tel_aviv.png';

// Blog Images
import blogImage1 from '../../Media/Blog/blog1.png';
import blogImage2 from '../../Media/Blog/blog2.png';
import blogImage3 from '../../Media/Blog/blog3.png';

// TaskManager Images
import taskImage1 from '../../Media/TaskManager/task1.png';
import taskImage2 from '../../Media/TaskManager/task2.png';
import taskImage3 from '../../Media/TaskManager/task3.png';

// Avatar Images
import avatar1 from '../../Media/Avatar/avatar1.png';


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
        gitLink: "https://github.com/tomerwein/Weather-app",
        techStack: ['Javascript', 'ReactJS', 'Axios', 'NodeJS', 'weather API', 'images-classification'],
        images: [weatherImage1, weatherImage2, weatherImage3]
    },
    {
        id: 3,
        title: 'Blog',
        description: 'I developed a user-friendly blog platform where users can sign in with their own username and password to manage their posts, including text, images, or videos, while also being able to view posts from other users. The platform includes essential features like registration, login, and protection against common security threats.',
        gitLink: "https://github.com/tomerwein/Blog",
        techStack: ['Typescript', 'ReactJS', 'NextJS', 'MongoDB', 'Restful-api', 'Cloudinary', 'JWT', 'CSRF-Protection', 'Bcrypt', 'Prisma', 'Authentication' ],
        images: [blogImage1, blogImage2, blogImage3]
    },
    {
        id: 4,
        title: 'Task Manager',
        description: 'I developed a secure task manager application that allows users to register, login, manage, edit, delete, and mark tasks as complete in their personal task lists, while also prioritizing and categorizing them. The platform includes essential security features to ensure user data protection.',
        gitLink: "https://github.com/tomerwein/Task-Manager-Tomer",
        techStack: ['Typescript', 'ReactJS', 'NodeJS', 'Express', 'Drag-And-Drop', 'Argon2', 'JSON', 'Cors', 'Bcrypt' ],
        images: [taskImage1, taskImage2, taskImage3]
    },
    {
        id: 5,
        title: 'Avatar',
        description: 'I developed an application that allows users to create avatars using the first letter of their name and choose their preferred color. The entire process is conducted server-side (SSR).',
        gitLink: "https://github.com/tomerwein/AvatarApp",
        techStack: ['Typescript', 'ReactJS', 'NodeJS', 'Express', 'SSR', 'Canvas'],
        images: [avatar1]
    },

];

export default projectData;
