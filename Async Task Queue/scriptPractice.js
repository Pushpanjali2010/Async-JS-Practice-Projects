/* function Task(taskNO) {
    this.write = function (text) {
       this.taskNO=taskNO
       console.log(`Task ${taskNO} started`);
       
       let rn =Math.floor(Math.random()*10);
        setTimeout(() => {
            console.log(`Task Completed in ${rn} sec`);
        }, rn*1000);
    }
}
let task1 = new Task(1);
let task2 = new Task(2);
 */

/* let pr = new Promise(function(res,rej){
    
    function task(n){
        console.log(`Task ${n} started`);
        let rn =Math.floor(Math.random()*10);
        setTimeout(() => {
        
    if(rn<5){
        res(`Task ${n} completed in `+rn+` sec` )
    }else{
        rej(`Task ${n} rejected for taking `+rn+` sec`)
    }
    }, rn*1000);
    }
    task(1)
    task(2)
    task(3)
    task(4)
})
pr
.then(function(val){
    console.log(val);
})
.catch(function(val){
    console.log(val);
})  */

function createTask(taskNo) {
  return new Promise((resolve, reject) => {
    console.log(`Task ${taskNo} started`);

    const time = Math.floor(Math.random() * 5) + 1;

    setTimeout(() => {
      console.log(`Task ${taskNo} completed in ${time} sec`);
      resolve(taskNo);
    }, time * 1000);
  });
}
function runTasksSequentially() {
  createTask(1);
  createTask(2);
  createTask(3);
  createTask(4);

  console.log("All tasks completed");
}

runTasksSequentially();

/* 
function createTask(id) {
  return {
    id,
    status: "waiting",
    run() {
      return new Promise((resolve) => {
        this.status = "Running";
        console.log(`Task ${id} started`);

        const time = Math.floor(Math.random() * 5) + 1;

        setTimeout(() => {
          this.status = "Completed";
          console.log(`Task ${id} completed in ${time} sec`);
          resolve();
        }, time * 1000);
      });
    },
  };
}
const queue = [];
let isRunning = false;
function addTask(task) {
  queue.push(task);
  tryToRunNext();
}


async function tryToRunNext() {
  if (isRunning) return; //isRunning = false toh function continue hoga

  if (queue.length === 0) return;

  isRunning = true;

  const nextTask = queue.shift();// it means task queue mai se remove hua run hone ke liye and run() use run krega
  await nextTask.run();
  isRunning = false;
  tryToRunNext();
}
addTask(createTask(1));
addTask(createTask(2));
addTask(createTask(3));
 */