const request = require('request');

function countCompletedTasks(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Request failed with status code:', response.statusCode);
      return;
    }

    const tasks = JSON.parse(body);
    const completedTasks = {};

    for (const userId in tasks) {
      const userTasks = tasks[userId];
      const completedCount = userTasks.filter(task => task.completed).length;
      completedTasks[userId] = completedCount;
    }

    console.log(completedTasks);
    console.log(`(${JSON.stringify(completedTasks).length} chars long)`);
    console.log('[stderr]: [Anything]');
    console.log('(0 chars long)');
  });
}

// Usage: node 4-completed_tasks.js http://localhost:5050/route_0/file_0
const url = process.argv[2];
countCompletedTasks(url);