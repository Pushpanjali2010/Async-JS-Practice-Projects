//To disable and enable add task btn
let warning = document.createElement("h4");
warning.textContent = "Too many task in the queue";
warning.className = "text-center text-2xl text-red-400 mb-6";
let btn = document.querySelector("#addTaskBtn");
function disableBtn() {
  btn.disabled = true;
  btn.className =
    "block bg-neutral-400 w-fit rounded-xl text-white px-4 py-3 text-5xl font-bold mt-10 mb-5 mx-auto";

  const btnTxt = document.querySelector(".buttonText");
  if (!warning.isConnected) {
    btnTxt.appendChild(warning);
  }
}

function enableBtn() {
  btn.disabled = false;
  btn.className =
    "block bg-indigo-400 w-fit rounded-xl text-white px-4 py-3 text-5xl font-bold mt-10 mb-10 mx-auto transition-transform active:scale-95 scale-120";

  if (warning.isConnected) {
    warning.remove();
  }
}

function createTask(id) {
  let ul = document.getElementById("taskList");
  let li = document.createElement("li");
  li.className =
    "block bg-red-700 w-fit rounded-xl text-white px-4 py-2 text-4xl font-bold mb-5 mx-auto";
  li.textContent = `Task ${id} -> Waiting`;
  ul.appendChild(li);

  return {
    id,
    status: "waiting",
    run() {
      return new Promise((resolve) => {
        this.status = "Running";
        console.log(`Task ${id} started`);
        li.textContent = `Task ${id} -> ${this.status}`;
        li.className =
          "block bg-blue-700 w-fit rounded-xl text-white px-4 py-2 text-4xl font-bold mb-5 mx-auto";
        const time = Math.floor(Math.random() * 5) + 1;

        setTimeout(() => {
          this.status = "Completed";
          li.textContent = `Task ${id} -> ${this.status}`;
          li.className =
            "block bg-green-700 w-fit rounded-xl text-white px-4 py-2 text-4xl font-bold mb-5 mx-auto";
          console.log(`Task ${id} completed in ${time} sec`);
          resolve();
        }, time * 1000);
      });
    },
  };
}
const queue = [];
let isRunning = false;

let taskId = 1;
btn.addEventListener("click", function () {
  if (queue.length >= 5) {
    disableBtn();
  } else {
    enableBtn();
    addTask(createTask(taskId));
    taskId++;
  }
});

function addTask(task) {
  queue.push(task);
  tryToRunNext();
}

async function tryToRunNext() {
  if (isRunning) return; //isRunning = false toh function continue hoga

  if (queue.length === 0) return;

  isRunning = true;

  const nextTask = queue.shift(); // it means task queue mai se remove hua run hone ke liye and run() use run krega
  await nextTask.run();
  isRunning = false;

  if (queue.length < 5) {
    enableBtn();
  }

  tryToRunNext();
}
