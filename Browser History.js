function solve(object, commands) {

    
    for (let i = 0; i < commands.length; i++) {
        let element = commands[i];
        let element1 = element.slice();
        element = element.split(' ');
        let command = element[0];
        let site = element[1];
        
        if(command === 'Open'){
            object['Open Tabs'].push(site);
            object['Browser Logs'].push(element1)
        }else if(command === 'Close'){
            if(object['Open Tabs'].includes(site)){
                let index = object['Open Tabs'].indexOf(site);
                let siteRemoved = object['Open Tabs'].splice(index,1);
                object['Recently Closed'].push(siteRemoved[0]);
                object['Browser Logs'].push(element1);
            }
        }else if(element1 === 'Clear History and Cache'){
            object['Open Tabs'] = [];
            object['Recently Closed'] = [];
            object['Browser Logs'] = [];
        }
    }
    
    console.log(object['Browser Name']);
    console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${object[`Recently Closed`].join(', ')}`);
    console.log(`Browser Logs: ${object[`Browser Logs`].join(', ')}`);
    
}

solve({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

  );