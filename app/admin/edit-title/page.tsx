'use client';

import { useState, useEffect, FormEvent } from 'react';

export default function EditTitlePage() {
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [newTitle, setNewTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  // API URL from environment variable, matching main page
  const API_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  // Fetch the current title when the component mounts
  useEffect(() => {
    async function fetchTitle() {
      setIsLoading(true);
      setError('');
      try {
        console.log('Fetching title from:', `${API_URL}/api/title`);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

        const res = await fetch(`${API_URL}/api/title`, {
          signal: controller.signal,
          cache: 'no-store',
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
          const text = await res.text();
          console.error('Fetch response error:', res.status, text);
          throw new Error(`Failed to fetch title: ${res.status} ${text || res.statusText}`);
        }

        const data = await res.json();
        console.log('Fetched title data:', data);
        setCurrentTitle(data.title || '');
        setNewTitle(data.title || '');
      } catch (err: any) {
        console.error('Fetch error:', err);
        setError(err.message || 'An error occurred while fetching the title.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchTitle();
  }, [API_URL]);

  // Handle form submission to save the title
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUpdating(true);
    setMessage('');
    setError('');

    try {
      console.log('Sending PUT request with title:', newTitle);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const res = await fetch(`${API_URL}/api/title`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let result;
      try {
        result = await res.json();
      } catch (jsonErr) {
        console.error('Invalid JSON response:', await res.text());
        throw new Error('Server returned invalid response');
      }

      console.log('PUT response:', result);

      if (!res.ok) {
        throw new Error(result.error || `Failed to update title: ${res.status} ${res.statusText}`);
      }

      setCurrentTitle(result.title || newTitle);
      setMessage('Title updated successfully!');
      setIsEditing(false);
    } catch (err: any) {
      console.error('Update error:', err);
      setError(err.message || 'An error occurred while updating the title.');
    } finally {
      setIsUpdating(false);
    }
  };

  // Handle edit button click
  const handleEdit = () => {
    setIsEditing(true);
    setMessage('');
    setError('');
    console.log('Entering edit mode');
  };

  // Handle cancel button click
  const handleCancel = () => {
    setIsEditing(false);
    setNewTitle(currentTitle);
    setMessage('');
    setError('');
    console.log('Cancelled edit');
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4">
      <div
        className="w-full max-w-[1200px] bg-white border border-[#F4F4F5] rounded-md shadow-sm p-8"
        style={{
          fontFamily: 'Inter, sans-serif',
          paddingTop: '30px',
          paddingBottom: '30px',
          paddingLeft: '120px',
          paddingRight: '120px',
        }}
      >
        <h1
          className="text-4xl font-semibold mb-8"
          style={{
            letterSpacing: '-2px',
            lineHeight: '48px',
            color: '#000',
          }}
        >
          Content Management System - Brynklabs
        </h1>

        {isLoading ? (
          <p className="text-gray-600 text-lg">Loading current title...</p>
        ) : (
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-2">Current Title:</p>
            <div
              className="text-lg font-medium text-gray-700 border border-[#F4F4F5] p-4 rounded-md"
              style={{ lineHeight: '24px' }}
              dangerouslySetInnerHTML={{ __html: currentTitle }}
            />
          </div>
        )}

        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label
                htmlFor="newTitle"
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ lineHeight: '20px' }}
              >
                New Title (HTML allowed):
              </label>
              <textarea
                id="newTitle"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-4 py-3 border border-[#F4F4F5] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFBD59] focus:border-[#FFBD59] transition duration-200 text-gray-700"
                rows={5}
                required
                disabled={isLoading || isUpdating}
                style={{ fontSize: '16px', lineHeight: '24px' }}
              />
            </div>

            {message && <p className="text-[#34D399] text-lg mb-6">{message}</p>}
            {error && <p className="text-red-600 text-lg mb-6">{error}</p>}

            <div className="flex space-x-6">
              <button
                type="submit"
                disabled={isLoading || isUpdating}
                className="flex-1 bg-[#FFBD59] hover:bg-opacity-90 text-black font-semibold py-3 px-6 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)' }}
              >
                {isUpdating ? 'Saving...' : 'Save'}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                disabled={isLoading || isUpdating}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)' }}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={handleEdit}
            disabled={isLoading}
            className="w-full bg-[#FFBD59] hover:bg-opacity-90 text-black font-semibold py-3 px-6 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)' }}
          >
            Edit Title
          </button>
        )}
      </div>
    </div>
  );
}