/*
TaskScheduler: Given a set of tasks and a cooling interval. The task represents in a  string(eg: 'ABABC). the interval is an integer value. if the same task came again we can execute only after cooling interval. Also, can't take another task too. question is find the total time required to execute the based on given cooling time. 
for Example. AABBC and cooling is 2  execution is A_ _ AB _ _ B C = total time is 9
Example 2 : ABAC cooling 2 execution is A B _ A C = total time is  5
*/

function taskScheduler(tasks, coolInterval) {
  let taskSet = new Set();
  let time = 0;
  tasks.split('').forEach(task => {
  	if (taskSet.has(task)) {
  		time += coolInterval + 1;
  	} else {
  		time++;
  		taskSet.add(task);
  	} 
  });
  return time;
}

console.log(taskScheduler('AABC', 2));	// A _ _ A B C -> 6
console.log(taskScheduler('ABAC', 2));	// A B _ _ A C -> 6
console.log(taskScheduler('ABAC', 3));	// A B _ _ _ A C -> 7
console.log(taskScheduler('AABBC', 2));	// A _ _ A B _ _ B C -> 9