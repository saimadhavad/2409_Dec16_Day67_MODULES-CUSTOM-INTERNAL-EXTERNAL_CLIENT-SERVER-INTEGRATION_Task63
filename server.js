const express = require("express");
const cors = require("cors")

let app = express();
app.use(cors());

app.listen(2629, ()=> {
    console.log("Listening to port 2629");
})

app.get ("/authorsArray",(req,res) => {

   const authorsArray = [
    {
      "name": "William Shakespeare",
      "birthYear": 1564,
      "deathYear": 1616,
      "nationality": "English",
      "genre": [
        "Drama",
        "Poetry"
      ],
      "notableWorks": [
        "Hamlet",
        "Romeo and Juliet",
        "Macbeth",
        "Othello",
        "King Lear"
      ],
      "award": "None",
      "biography": "William Shakespeare was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/William_Shakespeare_by_John_Taylor.jpg/800px-William_Shakespeare_by_John_Taylor.jpg"
    },
    {
      "name": "Jane Austen",
      "birthYear": 1775,
      "deathYear": 1817,
      "nationality": "English",
      "genre": [
        "Romance",
        "Classic"
      ],
      "notableWorks": [
        "Pride and Prejudice",
        "Sense and Sensibility",
        "Emma",
        "Mansfield Park"
      ],
      "award": "None",
      "biography": "Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique, and comment upon the British landed gentry at the end of the 18th century.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg/800px-CassandraAusten-JaneAusten%28c.1810%29_hires.jpg"
    },
    {
      "name": "Leo Tolstoy",
      "birthYear": 1828,
      "deathYear": 1910,
      "nationality": "Russian",
      "genre": [
        "Historical Fiction",
        "Realism"
      ],
      "notableWorks": [
        "War and Peace",
        "Anna Karenina",
        "The Death of Ivan Ilyich",
        "Resurrection"
      ],
      "award": "Nominated for Nobel Prize in Literature",
      "biography": "Leo Tolstoy was a Russian writer who is regarded as one of the greatest authors of all time. His epic novels are considered masterpieces of world literature.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%D0%9B%D0%B5%D0%B2_%D0%A2%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%B9_%28%D0%A7%D0%B5%D1%80%D1%82%D0%BA%D0%BE%D0%B2%2C_1910%29_-_0003600121.jpg/800px-%D0%9B%D0%B5%D0%B2_%D0%A2%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%B9_%28%D0%A7%D0%B5%D1%80%D1%82%D0%BA%D0%BE%D0%B2%2C_1910%29_-_0003600121.jpg"
    },
    {
      "name": "Gabriel Garcia Marquez",
      "birthYear": 1927,
      "deathYear": 2014,
      "nationality": "Colombian",
      "genre": [
        "Magical Realism",
        "Literary Fiction"
      ],
      "notableWorks": [
        "One Hundred Years of Solitude",
        "Love in the Time of Cholera",
        "Chronicle of a Death Foretold"
      ],
      "award": "Nobel Prize in Literature (1982)",
      "biography": "Gabriel Garcia Marquez was a Colombian novelist and Nobel laureate, best known for his magical realism and portrayal of Latin American life.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Gabriel_Garcia_Marquez.jpg"
    },
    {
      "name": "Mark Twain",
      "birthYear": 1835,
      "deathYear": 1910,
      "nationality": "American",
      "genre": [
        "Humor",
        "Adventure"
      ],
      "notableWorks": [
        "The Adventures of Tom Sawyer",
        "Adventures of Huckleberry Finn",
        "The Prince and the Pauper"
      ],
      "award": "None",
      "biography": "Mark Twain, pen name of Samuel Langhorne Clemens, was an American writer known for his humor and satirical wit. He is best remembered for his novels about adventurous boys growing up along the Mississippi River.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg"
    },
    {
      "name": "Agatha Christie",
      "birthTear": 1890,
      "deathTear": 1976,
      "nationality": "English",
      "genre": [
        "Mystery",
        "Detective Fiction"
      ],
      "notableWorks": [
        "Murder on the Orient Express",
        "The Murder of Roger Ackroyd",
        "And Then There Were None"
      ],
      "award": "None",
      "biography": "Agatha Christie was an English writer known for her detective novels and short stories. She is often called the 'Queen of Mystery' and is one of the best-selling authors in history.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Agatha_Christie.png"
    },
    {
      "name": "George Orwell",
      "birthYear": 1903,
      "deathYear": 1950,
      "nationality": "English",
      "genre": [
        "Dystopian",
        "Political Fiction"
      ],
      "notableWorks": [
        "Nineteen Eighty-Four",
        "Animal Farm",
        "Down and Out in Paris and London"
      ],
      "award": "None",
      "biography": "George Orwell, pen name of Eric Arthur Blair, was an English novelist, essayist, and critic. He is best known for his dystopian novel 'Nineteen Eighty-Four,' which has become a classic of modern literature.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/800px-George_Orwell_press_photo.jpg"
    },
    {
      "name": "Harper Lee",
      "birthYear": 1926,
      "deathYear": 2016,
      "nationality": "American",
      "genre": [
        "Southern Gothic",
        "Coming-of-Age"
      ],
      "notableWorks": [
        "To Kill a Mockingbird",
        "Go Set a Watchman"
      ],
      "award": "Pulitzer Prize for Fiction (1961)",
      "biography": "Harper Lee was an American novelist known for her novel 'To Kill a Mockingbird,' a classic of modern American literature. She received the Pulitzer Prize for Fiction for this novel.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Photo_portrait_of_Harper_Lee_%28To_Kill_a_Mockingbird_dust_jacket%2C_1960%29.jpg"
    },
    {
      "name": "J.R.R. Tolkien",
      "birthYear": 1892,
      "deathYear": 1973,
      "nationality": "English",
      "genre": [
        "Fantasy",
        "High Fantasy"
      ],
      "notableWorks": [
        "The Hobbit",
        "The Lord of the Rings",
        "The Silmarillion"
      ],
      "award": "None",
      "biography": "J.R.R. Tolkien was an English writer, poet, philologist, and university professor. He is best known for his high-fantasy works, 'The Hobbit' and 'The Lord of the Rings,' which have had a major impact on the fantasy genre.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/J._R._R._Tolkien%2C_ca._1925.jpg/800px-J._R._R._Tolkien%2C_ca._1925.jpg"
    },
    {
      "name": "Emily Dickinson",
      "birthYear": 1830,
      "deathYear": 1886,
      "nationality": "American",
      "genre": [
        "Poetry"
      ],
      "notableWorks": [
        "Selected Poems of Emily Dickinson",
        "The Complete Poems of Emily Dickinson"
      ],
      "award": "None",
      "biography": "Emily Dickinson was an American poet known for her innovative use of language and her unconventional approach to poetry. She is considered one of the most important poets in American literature.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Black-white_photograph_of_Emily_Dickinson2.png/800px-Black-white_photograph_of_Emily_Dickinson2.png"
    }];
    res.json(authorsArray);
})
