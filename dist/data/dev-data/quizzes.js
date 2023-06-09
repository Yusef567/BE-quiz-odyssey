"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quizData = [
    {
        quiz_name: "Ancient Egypt Trivia",
        category: "History",
        quiz_img: "https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg",
        description: "Test your knowledge of ancient Egyptian history with this trivia quiz. From their writing system to their famous pharaohs and their way of life, this quiz covers some of the most interesting aspects of ancient Egyptian civilization",
        username: "David",
    },
    {
        quiz_name: "Ancient Civilizations Trivia",
        category: "History",
        quiz_img: "https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg",
        description: "This quiz tests your knowledge on the ancient civilizations of Greece and Rome. Answer questions related to famous buildings, philosophers, military formations, languages, and other historical facts. See how much you know about these important periods in human history.",
        username: "David",
    },
    {
        quiz_name: "Vikings Trivia Challenge",
        category: "History",
        quiz_img: "https://images.pexels.com/photos/8876097/pexels-photo-8876097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Test your knowledge about the Vikings and their fascinating history with this trivia challenge. Answer questions about their origins, customs, and accomplishments, and see how much you know about these legendary seafarers.",
        username: "David",
    },
    {
        quiz_name: "World War History Trivia",
        category: "History",
        quiz_img: "https://images.pexels.com/photos/1876620/pexels-photo-1876620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Test your knowledge about World War I and II with this quiz. The quiz consists of 8 questions that cover important events, treaties, and personalities of the two world wars.Answer the questions and find out how much you know about the world wars",
        username: "David",
    },
    {
        quiz_name: "World Geography Trivia",
        category: "Geography",
        quiz_img: "https://images.pexels.com/photos/464391/pexels-photo-464391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "This quiz tests your knowledge of geography by asking questions about the capital cities, mountain peaks, rivers, deserts, continents, and waterfalls of the world.",
        username: "David",
    },
    {
        quiz_name: "Borders and Peaks Geography Challenge",
        category: "Geography",
        quiz_img: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Test your knowledge of world geography with this quiz,this quiz includes questions about the largest lakes, longest borders and highest mountain peaks.See how well you know the world and challenge yourself to get all the answers right!",
        username: "David",
    },
    {
        quiz_name: "Geography Genius Quiz",
        category: "Geography",
        quiz_img: "https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Test your knowledge of world geography with this quiz. Answer questions about some of the smallest and most densely populated countries, capital cities,rivers and mountains.See how much you know about the world around us!",
        username: "David",
    },
    {
        quiz_name: "Capital Conundrum Quiz",
        category: "Geography",
        quiz_img: "https://images.pexels.com/photos/163194/old-retro-antique-vintage-163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "This quiz that will take you on a journey around the world with questions that test your knowledge of various capital cities.",
        username: "David",
    },
    {
        quiz_name: "Mountains of the World Quiz",
        category: "Geography",
        quiz_img: "https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Test your knowledge of the world's tallest peaks with this quiz on mountains from different continents,see how many of the highest peaks you know. ",
        username: "Joe",
    },
    {
        quiz_name: "Geography Basics Trivia",
        category: "Geography",
        quiz_img: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "This quiz tests your basic knowledge of geography. It includes questions about oceans, rivers, continents, and planets.",
        username: "Joe",
    },
    {
        quiz_name: "Worldly Wonders Quiz",
        category: "General knowledge",
        quiz_img: "https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "This quiz tests your basic knowledge, it includes questions about oceans, rivers, continents, and planets.",
        username: "Joe",
    },
    {
        quiz_name: "Brain Busters Challenge",
        category: "General knowledge",
        quiz_img: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Test your knowledge with this Trivia Challenge! This quiz features a variety of questions from different categories such as history, science, pop culture, and more.",
        username: "Joe",
    },
    {
        quiz_name: "Knowledge Wisdom Quiz",
        category: "General knowledge",
        quiz_img: "https://images.pexels.com/photos/1462226/pexels-photo-1462226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Test your knowledge on a variety of topics with this general knowledge Challenge quiz. From geography to pop culture, this quiz features questions on a wide range of subjects.",
        username: "Joe",
    },
    {
        quiz_name: "Time Warp Trivia",
        category: "General knowledge",
        quiz_img: "https://images.pexels.com/photos/1799987/pexels-photo-1799987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Test your general knowledge with this quiz that covers a variety of topics, including architecture, geography, movies, history, and more.",
        username: "Joe",
    },
    {
        quiz_name: "Game On Sports Quiz",
        category: "Sports",
        quiz_img: "https://images.pexels.com/photos/236937/pexels-photo-236937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Test your knowledge of sports history and iconic moments with this quiz that covers various dates and events of different sports.",
        username: "Joe",
    },
    {
        quiz_name: "Ready, Steady, Go!",
        category: "Sports",
        quiz_img: "https://images.pexels.com/photos/332835/pexels-photo-332835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "A fun and challenging quiz that will test your knowledge of various sports, from Formula One and darts to football and Olympic rowing. Put your sports knowledge to the test with this exciting quiz!",
        username: "Matt",
    },
    {
        quiz_name: "World Cup Wonder Quiz",
        category: "Sports",
        quiz_img: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "This quiz will put your knowledge to the test with questions about football, running, baseball, basketball, tennis, Olympic gold medals, and American football.",
        username: "Matt",
    },
    {
        quiz_name: "Sporting Glory Challenge",
        category: "Sports",
        quiz_img: "https://images.pexels.com/photos/7005503/pexels-photo-7005503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "This quiz tests your knowledge of various sports and their history. Answer questions about the Ryder Cup, FIFA World Cup, NBA championships, Rugby World Cup, Olympic gold medals, Champions League titles, and more. Challenge yourself to see how much you know about the world of sports!",
        username: "Matt",
    },
    {
        quiz_name: "Famous Characters and Movies Trivia",
        category: "Other",
        quiz_img: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Test your knowledge of famous characters in movies and TV shows with this quiz.covers a range of iconic characters and their stories. See how many you can get right!",
        username: "Matt",
    },
    {
        quiz_name: "Lights, Camera, Action",
        category: "Other",
        quiz_img: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "How well do you know your favorite movies and books? Test your knowledge with this quiz.Answer questions about characters, plot points, and memorable moments.",
        username: "Matt",
    },
];
exports.default = quizData;
