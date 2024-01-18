let text = [
  "Initializing Hacking",
  "Reading your files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
];

async function main() {
  const randomDelay = () => {
    return new Promise((resolve, reject) => {
      let timeout = 1 + 2 * Math.random();
      setTimeout(() => {
        resolve();
      }, timeout * 1000);
    });
  };

  const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
  };

  let t = setInterval(() => {
    let last = document.body.lastElementChild;
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML += ".";
    }
  }, 200);

  for (const item of text) {
    await addItem(item);
  }
  await randomDelay();
  clearInterval(t);
}

main();
