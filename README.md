# 🎧 Audio Transcription with Speaker Diarization

This is a **React** web application that transcribes audio files using **AssemblyAI's API** and includes **speaker diarization** to differentiate speakers in the audio.

## 🚀 Features
- **Transcribe Audio**: Convert speech into text using AssemblyAI.
- **Speaker Diarization**: Identify different speakers in the audio.
- **Live Status Updates**: Continuously checks the transcription progress.
- **Custom Audio URL Input**: Users can provide an external audio file URL for transcription.
- **Real-time Feedback**: Displays transcription results after processing.

## 🛠 Tech Stack
- **React.js** - Frontend framework
- **Axios** - API calls
- **AssemblyAI API** - Speech-to-text service
- **Tailwind CSS** - Styling

## 💂️ Project Structure
```
├── src/
│   ├── App.jsx  # Main React component
│   ├── main.jsx # Entry point
│   ├── index.css # Global styles
│── public/
│── package.json
│── README.md
```

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/enayetsyl/transcript-assembly-ai.git
cd audio-transcription-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up API Key
- Create a `.env` file in the root directory and add:
  ```
  VITE_UNIVERSAL_API_KEY=your_assemblyai_api_key
  ```
- Replace `your_assemblyai_api_key` with your **AssemblyAI API key**.

### 4️⃣ Start the Development Server
```sh
npm run dev
```

## 📌 Usage
1. Enter the **URL** of an audio file in the input field.
2. Click **"Transcribe Audio"** to start transcription.
3. Wait for the API to process the audio (takes a few seconds).
4. The transcribed text with **speaker labels** will be displayed.

## 📺 API Reference
- **POST `/v2/transcript`** → Submits the audio for transcription.
- **GET `/v2/transcript/{id}`** → Retrieves the transcription result.
- **Headers**:
  - `authorization: YOUR_API_KEY`
  - `content-type: application/json`

## 🚀 Future Improvements
- Upload local audio files for transcription.
- Highlight each speaker in different colors.
- Support for multiple languages.

## 🏆 **Author:** Md Enayetur Rahman

### Contact Information
- [LinkedIn](https://www.linkedin.com/in/md-enayetur-rahman/)
- [Facebook](https://www.facebook.com/profile.php?id=100094416483981)
- [X (Twitter)](https://x.com/enayetu_syl)
- [YouTube](https://www.youtube.com/@MdEnayeturRahman)
- [GitHub](https://github.com/enayetsyl/)
- [Medium](https://medium.com/@enayetflweb)
- [dev.to](https://dev.to/md_enayeturrahman_2560e3)
- [Leetcode](https://leetcode.com/u/XTl7hvNPIc/)
- [Hackerrank](https://www.hackerrank.com/profile/enayetflweb)
- [Codeforces](https://codeforces.com/profile/enayetsyl)
- [Email](mailto:enayetflweb@gmail.com)


