let folders = JSON.parse(localStorage.getItem("folders")) || [
  {
    id: 1,
    name: "Root",
    children: [
      {
        id: 2,
        name: "Documents",
        children: []
      },
      {
        id: 3,
        name: "Images",
        children: []
      }
    ]
  }
];

// Save to localStorage
function saveData() {
  localStorage.setItem("folders", JSON.stringify(folders));
}

// Recursive render function
function renderFolders(data, container) {
  container.innerHTML = "";

  data.forEach(folder => {
    const div = document.createElement("div");
    div.className = "folder";

    div.innerHTML = `
      <span class="folder-name">📁 ${folder.name}</span>
      <button class="add-btn" onclick="addSubFolder(${folder.id})">+</button>
      <button class="delete-btn" onclick="deleteFolder(${folder.id})">x</button>
    `;

    container.appendChild(div);

    if (folder.children && folder.children.length > 0) {
      const childContainer = document.createElement("div");
      childContainer.style.marginLeft = "20px";
      renderFolders(folder.children, childContainer);
      container.appendChild(childContainer);
    }
  });
}

// Add subfolder
function addSubFolder(parentId) {
  const name = prompt("Enter folder name:");
  if (!name) return;

  function findAndAdd(folderList) {
    folderList.forEach(folder => {
      if (folder.id === parentId) {
        folder.children.push({
          id: Date.now(),
          name: name,
          children: []
        });
      } else {
        findAndAdd(folder.children);
      }
    });
  }

  findAndAdd(folders);
  saveData();
  init();
}

// Delete folder
function deleteFolder(id) {
  if (!confirm("Are you sure you want to delete this folder?")) return;

  function removeFolder(folderList) {
    return folderList.filter(folder => {
      if (folder.id === id) return false;
      folder.children = removeFolder(folder.children);
      return true;
    });
  }

  folders = removeFolder(folders);
  saveData();
  init();
}

// Initialize app
function init() {
  const container = document.getElementById("folderContainer");
  renderFolders(folders, container);
}

init();