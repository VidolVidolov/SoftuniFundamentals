function solve(input) {

    let users = new Set();
    let articles = {};

    for (const iterator of input) {
        let username = '';
        let articleName = '';
        if (iterator.includes(': ')) {
            let line = iterator.split(': ');
            let sideAttributes = line[0].split(' ');
            username = sideAttributes[0];
            articleName = sideAttributes[3];
            let sideCommentsInfo = line[1].split(', ');
            let commentTitile = sideCommentsInfo[0];
            let commnetContent = sideCommentsInfo[1];

            if (users.has(username) && articles.hasOwnProperty(articleName)) {
                for (const user of users) {
                    if (user === username) {
                        let obj = {};
                        obj[commentTitile] = commnetContent;
                        if(!articles[articleName][user]){
                            articles[articleName][user] = obj;
                        }else{
                            articles[articleName][user][commentTitile] = commnetContent;
                        }
                    }
                }
            }

        } else {
            let line = iterator.split(' ');
            let attribute1 = line[0];
            let attribute2 = line[1];

            if (attribute1 === 'user') {
                username = attribute2;
                users.add(username)
            } else if (attribute1 === 'article') {
                articleName = attribute2;
                articles[articleName] = [];
            }
        }
    }


    let sortedArticles = Object.keys(articles).sort((a, b) => {
        let articleOne = Object.keys(articles[a]);
        articleOne = articleOne.length;
        let articleTwo = Object.keys(articles[b]);
        articleTwo = articleTwo.length;

        return articleTwo - articleOne;
    });

    for (const article of sortedArticles) {
        let sortedUsers = Object.keys(articles[article]).sort((a, b) => a.localeCompare(b));
        let check = Object.entries(articles[article]);
        if(check.length === 0){
            continue;
        }else{
            console.log(`Comments on ${article}`);
        }
        for (const iterator of sortedUsers) {
            Object.entries(articles[article][iterator]).forEach(([key,value]) => {
                console.log(`--- From user ${iterator}: ${key} - ${value}`);
            })
        }

    }


}

solve(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user AastUser',
    'SeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much',
    'AastUser posts on Movies: I=m also like movies, I really do',
    'AastUser posts on Movies: I/m also like movies, I really do',
]);