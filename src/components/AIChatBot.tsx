"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaRobot } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "Can you briefly introduce yourself and your journey into software development? 🚀",
  "What are your strongest technical skills and core tech stack? 💻",
  "Tell me about your most impactful project and your specific role in it. 🌟",
  "How have you applied AI in your projects, and what tools or models did you use? 🤖",
  "What was the goal behind the 'Before You Go' project, and how did you build it? 🗺️",
  "How do you approach learning new technologies or solving technical challenges? 📚",
  "Have you led or worked in a team before? What was your role and how did you contribute? 👥",
  "How do you ensure usability and performance in your applications? ⚡",
  "What are your short-term and long-term career goals? 🎯",
  "Why do you want to work in Sydney, and what kind of company are you looking for? 🌏",
];

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [audio] = useState(
    typeof window !== "undefined" ? new Audio("/sounds/notification.mp3") : null
  );

  const playNotificationSound = () => {
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }
  };

  const handleSend = async (message: string = input.trim()) => {
    if (!message) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
      playNotificationSound();
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, an error occurred. Please try again." },
      ]);
    }

    setIsLoading(false);
  };

  const handleReset = () => {
    setMessages([]);
    setInput("");
  };

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className='bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110'>
          <FaRobot className='w-6 h-6' />
        </button>
      ) : (
        <div
          className='bg-white dark:bg-navy-light rounded-lg shadow-xl w-80 sm:w-96 h-[600px] flex flex-col'
          onWheel={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onScroll={(e) => {
            e.stopPropagation();
          }}
          style={{ overscrollBehavior: "contain" }}>
          {/* Header */}
          <div className='flex items-center justify-between p-4 border-b dark:border-navy-dark'>
            <div className='flex items-center gap-2'>
              <FaRobot className='w-6 h-6 text-green-500' />
              <h3 className='font-semibold text-slate-800 dark:text-slate-200'>
                Jin&apos;s AI Assistant
              </h3>
            </div>
            <div className='flex items-center gap-2'>
              <button
                onClick={handleReset}
                className='text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors'>
                <IoArrowBack className='w-5 h-5' />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className='text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors'>
                <IoMdClose className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Message Area */}
          <div
            className='flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain'
            style={{ overscrollBehavior: "contain" }}>
            {messages.length === 0 && (
              <div className='space-y-4'>
                <p className='text-slate-600 dark:text-slate-400 text-center'>
                  👋 Hi! I&apos;m Jin&apos;s AI assistant. Feel free to ask me anything about
                  Jin&apos;s experience, projects, or skills!
                </p>
                <p className='text-sm text-slate-500 dark:text-slate-500 text-center italic mb-4'>
                  Note: As an AI assistant, my responses might not always be 100% accurate. For the
                  most accurate information, please contact Jin directly at{" "}
                  <a
                    href='mailto:Jeongjin.lee@student.uts.edu.au'
                    className='text-green-500 hover:text-green-600 underline'>
                    Jeongjin.lee@student.uts.edu.au
                  </a>
                </p>
                <div className='grid grid-cols-1 gap-2'>
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSend(question)}
                      className='text-left p-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-dark rounded-lg transition-all duration-200 hover:translate-x-1'>
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-green-500 text-white"
                      : "bg-slate-100 dark:bg-navy-dark text-slate-800 dark:text-slate-200"
                  }`}>
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className='flex justify-start'>
                <div className='bg-slate-100 dark:bg-navy-dark rounded-lg p-3 text-slate-800 dark:text-slate-200'>
                  <div className='flex gap-1'>
                    <div className='w-2 h-2 bg-slate-400 rounded-full animate-bounce'></div>
                    <div className='w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]'></div>
                    <div className='w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]'></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className='p-4 border-t dark:border-navy-dark'>
            <div className='flex gap-2'>
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder='Ask me anything...'
                className='flex-1 px-4 py-2 rounded-full border dark:border-navy-dark bg-slate-50 dark:bg-navy-dark focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500'
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading}
                className='bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white rounded-full p-2 transition-all duration-200 hover:scale-105 disabled:hover:scale-100'>
                <BiSend className='w-6 h-6' />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
