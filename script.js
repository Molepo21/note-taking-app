const noteForm = document.getElementById("note-form");
const confirmDialog = document.getElementById("consfirm-close-dialog");
const openNoteForm = document.getElementById("open-note");

const addUpdateNote = document.getElementById("add-update-note");
const cancelBtn = document.getElementById("cancel-btn");
const closeNoteForm = document.getElementById("close-note-form")

const discardBtn = document.getElementById("discard-btn")
const noteContainer = document.getElementById("note-container");
const titleInput = document.getElementById("title-input");

const dateInput = document.getElementById("date-input")
const descriptionInput = document.getElementById("description-input")

//storing data in an array
const taskData = []

//storing data in an object to track current state

let currentTask = {}

openNoteForm.addEventListener("click",function (){
    noteForm.classList.toggle("hidden")
})