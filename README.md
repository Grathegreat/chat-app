# Real-Time Chat Application

This is a real-time chat application built with Node.js, Express, and Socket.io. It allows users to join a chat room with a username and profile picture, send text messages, send photos, and send voice messages. The application features profanity filtering and differentiates between messages from the current user and other users with color coding.

## Features

- Real-time messaging
- Send and display photos
- Set and display profile pictures
- Send and play voice messages
- Profanity filter
- User join and leave notifications
- User message color differentiation (blue for the current user, grey for others)

## Technologies Used

- Node.js
- Express
- Socket.io
- HTML/CSS
- JavaScript
- bad-words (for profanity filtering)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v14.x or later recommended)
- npm (v6.x or later recommended)

### Installing

1. **Clone the repository**

    ```bash
    git clone https://github.com/Grathegreat/chat-app.git
    cd chat-application
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the application**

    ```bash
    node server.js
    ```

4. **Open the application in your browser**

    Open your browser and go to `http://localhost:3000`.

## Usage

1. **Join the chat**

    - Enter a username.
    - Click on the "Select Profile" button to choose a profile picture.
    - Click on the "Join" button.

2. **Send a message**

    - Type a message in the input field and click "Send".

3. **Send a photo**

    - Click on the "Add Photo" button, select a photo, and click "Send".

4. **Send a voice message**

    - Click on the "Record Voice" button to start recording.
    - Click on the "Stop Recording" button to stop and send the voice message.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
