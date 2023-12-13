# File-Upload-Using-React-JS
This code is a React component that creates a file upload functionality with the ability to view, edit, and remove uploaded files. Here's a breakdown of the code:

### State Management:
useState hook is used to manage the state of files, initialized as an empty array.
files state holds the uploaded files along with additional attributes like preview (URL for file preview) and editing (flag to determine if the file is being edited).

### Functionalities:
1. handleDrop: This function is triggered when files are dropped into the designated drop zone. It updates the state by adding the dropped files to the existing files array, creating previews, and setting the editing flag to false for each file.
2. removeFile: Removes the file from the files array based on the provided index.
3. toggleEdit: Toggles the editing flag of a specific file at the provided index. It ensures only the selected file's editing status changes while others are set to false.
4. handleEditDrop: Handles the file change event for editing. It updates the file at the specified index with the newly uploaded file data, including its preview and sets the editing flag to false.
5. UseDropzone Hook:
useDropzone hook from react-dropzone is utilized to create a drop zone area for file uploading.
getRootProps and getInputProps are helper functions from the hook that provide properties to the designated drop zone area and input element, respectively.
6. Rendering:
Renders a layout with a drop zone area, displaying the current uploaded files as cards.
For each file in the files array, it displays an image preview, two buttons for editing and removing files, and an input field for editing the file content.

## About react-dropzone  library:
The react-dropzone library is a versatile React component that provides an easy way to implement file upload functionality in web applications. It simplifies the process of handling file uploads by allowing users to drag and drop files into a designated area or click to select files from their device.

### Key Features of react-dropzone  library:
Drag-and-Drop Support: Users can drag files from their desktop and drop them onto the designated area in the browser for uploading.

File Selection: Users can also click on the dropzone to open the file picker dialog and select files conventionally.

Customizable UI: The appearance and behavior of the dropzone area can be customized to match the application's design.

File Preview: It offers the ability to preview uploaded files before final submission.

File Validation: Supports validation for file types, maximum file size, and other configurable options to ensure uploaded files meet specified criteria.

[Edit in Codeflow ⚡️](https://stackblitz.com/~/github.com/AshwiniDhakane/File-Upload-Using-React-JS)

