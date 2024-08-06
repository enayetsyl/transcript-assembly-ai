import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState('https://res.cloudinary.com/dj3qabx11/video/upload/v1722867224/RT60_BookstoreRecommendation_Regular_z3ugt0.mp3')

  const handleAudioURL = (e) => {
    setAudioUrl(e.target.value)
  }

  const handleTranscribe = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.assemblyai.com/v2/transcript',
        {
          audio_url: audioUrl,
          speaker_labels: true, // Enable diarization
        },
        {
          headers: {
            authorization: import.meta.env.VITE_UNIVERSAL_API_KEY,
            'content-type': 'application/json',
          },
        }
      );

      const { id } = response.data;
      const checkStatusInterval = setInterval(async () => {
        const statusResponse = await axios.get(`https://api.assemblyai.com/v2/transcript/${id}`, {
          headers: {
            authorization: import.meta.env.VITE_UNIVERSAL_API_KEY,
          },
        });

        if (statusResponse.data.status === 'completed') {
          clearInterval(checkStatusInterval);
          const utterances = statusResponse.data.utterances || [];
          console.log('utterances', utterances)
          setTranscript(formatTranscript(utterances));
          setLoading(false);
        } else if (statusResponse.data.status === 'failed') {
          clearInterval(checkStatusInterval);
          setTranscript('Transcription failed');
          setLoading(false);
        }
      }, 5000); // Check every 5 seconds
    } catch (error) {
      console.error('Error transcribing audio:', error);
      setTranscript('Error transcribing audio');
      setLoading(false);
    }
  };

  const formatTranscript = (utterances) => {
    return utterances.map(utterance => `\nSpeaker ${utterance.speaker}: ${utterance.text}`).join('');
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-3xl py-10'>Audio Transcription with Diarization</h1>
      <input type="text" className='block border px-4 border-black my-5 w-1/2 py-2 rounded-lg' 
      value={audioUrl}
      onChange={handleAudioURL}
      />
      <button onClick={handleTranscribe} disabled={loading} className={`px-5 py-3 rounded-lg text-center font-bold bg-black text-white ${loading ? 'bg-gray-600' : ''}`}>
        {loading ? 'Transcribing...' : 'Transcribe Audio'}
      </button>
      {transcript && <pre className='w-full px-20 py-5 break-words whitespace-pre-wrap'>{transcript}</pre>}
    </div>
  );
};

export default App;
