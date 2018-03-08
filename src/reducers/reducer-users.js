/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Gareth",
            last: "Smith",
            age: 71,
            description: "Gareth is a React developer and YouTuber",
            thumbnail: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg"
        },
        {
            id: 2,
            first: "Joby",
            last: "Wasilenko",
            age: 27,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg"
        },
        {
            id: 3,
            first: "Madison",
            last: "Williams",
            age: 24,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg"
        }
    ]
}