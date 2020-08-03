function solve(input) {

    let followers = {};
    let commands = input.slice();
    let line = commands.shift();

    while (line !== 'Log out') {
        let [command, username, count] = line.split(': ');

        if (command === 'New follower') {
            if (!followers[username]) {
                followers[username] = {
                    likes: 0,
                    comments: 0,
                    isBlocked: false,
                }
            }
        } else if (command === 'Like') {
            if (!followers[username]) {
                followers[username] = {
                    likes: 0,
                    comments: 0,
                    isBlocked: false,
                }
            }
            followers[username].likes += Number(count);
        } else if(command === 'Comment'){
            if(!followers[username]){
                followers[username] = {
                    likes: 0,
                    comments: 0,
                    isBlocked: false,
                }
            }
            followers[username].comments += 1;
        } else if(command === 'Blocked'){
            if(followers[username] && !followers[username].isBlocked){
                followers[username].isBlocked = true;
            }else {
                console.log(`${username} doesn't exist.`);
            }
        }
        line = commands.shift();
    }

    let validFollowers = Object.keys(followers).filter(el => followers[el].isBlocked === false);
    let sorted = validFollowers.sort((a,b) => followers[b].likes - followers[a].likes || a.localeCompare(b));
    console.log(`${sorted.length} followers`);
    for (let person  of sorted) {
        console.log(`${person}: ${followers[person].likes + followers[person].comments}`);
    }

}

solve([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
]
);