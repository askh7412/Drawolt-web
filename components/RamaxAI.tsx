'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/lib/themeContext';
import { translations } from '@/lib/i18n';
import {
  MessageSquare,
  X,
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Sparkles,
  Bot,
  User,
  Zap,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ramax' | 'user';
  text: string;
  time: string;
}

export function RamaxAI() {
  const { theme, lang, isRtl } = useTheme();
  const t = translations[lang];

  const msgIdCounter = useRef(1);
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome-init',
      sender: 'ramax',
      text: t.ramax.welcomeMsg,
      time: '09:00',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeakingEnabled, setIsSpeakingEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Text to Speech
  const speakText = (text: string) => {
    if (!isSpeakingEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Pick appropriate language code
    if (lang === 'fa') utterance.lang = 'fa-IR';
    else if (lang === 'ar') utterance.lang = 'ar-SA';
    else if (lang === 'de') utterance.lang = 'de-DE';
    else utterance.lang = 'en-US';

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  // Voice Input (Speech Recognition)
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(t.ramax.voiceNotSupported);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = lang === 'fa' ? 'fa-IR' : lang === 'ar' ? 'ar-SA' : lang === 'de' ? 'de-DE' : 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      setIsListening(false);
    }
  };

  const handleSend = async (messageToSend?: string) => {
    const text = (messageToSend || inputText).trim();
    if (!text || isLoading) return;

    msgIdCounter.current += 1;
    const currentId = `msg-${msgIdCounter.current}`;

    const userMsg: ChatMessage = {
      id: currentId,
      sender: 'user',
      text,
      time: '12:00',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, lang }),
      });

      const data = await res.json();
      const replyText = data.reply || (lang === 'fa' ? 'پاسخ دریافت نشد.' : 'No response.');

      msgIdCounter.current += 1;
      const botMsg: ChatMessage = {
        id: `msg-${msgIdCounter.current}`,
        sender: 'ramax',
        text: replyText,
        time: '12:00',
      };

      setMessages((prev) => [...prev, botMsg]);
      speakText(replyText);
    } catch (err) {
      msgIdCounter.current += 1;
      const fallbackMsg: ChatMessage = {
        id: `msg-${msgIdCounter.current}`,
        sender: 'ramax',
        text:
          lang === 'fa'
            ? 'متاسفانه در برقراری ارتباط موقت مشکلی پیش آمد، اما در تمام ابزارهای دراوولت ۱۸ ماه گارانتی طلایی تعویض و گشتاور ۹۸۰ نیوتن‌متر تضمین شده است!'
            : 'Temporary connection delay. Remember, DRAWOLT tools feature 18-month unconditional replacement warranty and class-leading torque!',
        time: '12:00',
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-5 z-40 ${isRtl ? 'left-5' : 'right-5'}`}>
      {/* Floating Trigger Button / Mascot Avatar */}
      {!isOpen && (
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-2 p-3 sm:px-4 sm:py-3 bg-slate-900 text-white rounded-full border-2 border-[#9DCB16] shadow-2xl hover:scale-105 transition-all duration-300"
            aria-label="Open Ramax AI Assistant"
          >
            {/* Cyber Lion / Ramax Robot Mascot Avatar */}
            <div className="relative w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center border border-[#9DCB16]">
              <svg viewBox="0 0 100 100" fill="none" className="w-6 h-6">
                <polygon points="50,6 88,26 88,74 50,94 12,74 12,26" fill="#1E2738" stroke="#9DCB16" strokeWidth="4" />
                <path d="M 34 32 L 52 32 C 64 32 70 38 70 50 C 70 62 64 68 52 68 L 34 68 Z" fill="none" stroke="#9DCB16" strokeWidth="4" />
                <polygon points="54,44 60,46 55,49" fill="#B6E522" />
              </svg>
              {/* Online Pulse Dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#9DCB16] rounded-full border-2 border-slate-900 animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#9DCB16] rounded-full border-2 border-slate-900" />
            </div>

            <div className="hidden sm:block text-start leading-tight">
              <span className="text-xs font-black tracking-wide text-white flex items-center gap-1">
                <span>{t.ramax.title}</span>
                <span className="text-[10px] text-[#9DCB16]">AI</span>
              </span>
              <span className="text-[10px] text-[#9DCB16] font-mono font-bold block">
                {t.ramax.statusOnline}
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div
          className="w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] bg-slate-900/95 dark:bg-[#0E1526]/95 border-2 border-[#9DCB16]/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-[#9DCB16] flex items-center justify-center relative">
                <Bot className="w-4 h-4 text-[#9DCB16]" />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#9DCB16]" />
              </div>
              <div>
                <span className="text-xs font-black text-white flex items-center gap-1">
                  <span>{t.ramax.title}</span>
                  <span className="text-[9px] font-mono bg-[#9DCB16] text-slate-950 px-1 rounded font-black">
                    AI
                  </span>
                </span>
                <span className="text-[10px] text-slate-400 block font-mono">
                  {t.ramax.subtitle}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* TTS Voice Toggle */}
              <button
                onClick={() => {
                  if (isSpeaking) window.speechSynthesis?.cancel();
                  setIsSpeakingEnabled(!isSpeakingEnabled);
                }}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
                title={isSpeakingEnabled ? 'Mute Voice' : 'Enable Voice'}
              >
                {isSpeakingEnabled ? (
                  <Volume2 className="w-4 h-4 text-[#9DCB16]" />
                ) : (
                  <VolumeX className="w-4 h-4 text-slate-500" />
                )}
              </button>

              {/* Close Button */}
              <button
                onClick={() => {
                  if (isSpeaking) window.speechSynthesis?.cancel();
                  setIsOpen(false);
                }}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Prompt Suggestions */}
          <div className="p-2 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
            {t.ramax.quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-[#9DCB16] rounded-md whitespace-nowrap transition-colors border border-slate-700/60 text-[10px]"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-start gap-2 ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'ramax' && (
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-[#9DCB16] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-[#9DCB16]" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-2xl max-w-[82%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#9DCB16] text-slate-950 font-medium rounded-tr-none'
                      : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-tl-none'
                  }`}
                >
                  <p>{m.text}</p>
                  <span
                    className={`block text-[9px] mt-1 ${
                      m.sender === 'user' ? 'text-slate-800 font-mono' : 'text-slate-400 font-mono'
                    }`}
                  >
                    {m.time}
                  </span>
                </div>

                {m.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs py-2">
                <div className="w-2 h-2 rounded-full bg-[#9DCB16] animate-ping" />
                <span>{lang === 'fa' ? 'راماکس در حال محاسبه پاسخ فنی...' : 'Ramax is analyzing...'}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Speaking Status Pill */}
          {isSpeaking && (
            <div className="px-3 py-1 bg-[#9DCB16]/20 border-t border-[#9DCB16]/40 flex items-center justify-between text-[11px] text-[#9DCB16] font-mono">
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span>{t.ramax.speaking}</span>
              </span>
              <button
                onClick={() => window.speechSynthesis?.cancel()}
                className="hover:underline text-[10px]"
              >
                {lang === 'fa' ? 'قطع صدا' : 'Stop'}
              </button>
            </div>
          )}

          {/* Input Bar */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              {/* Mic Button */}
              <button
                type="button"
                onClick={toggleListening}
                className={`p-2 rounded-lg transition-colors ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
                title={isListening ? 'Stop listening' : 'Voice Input'}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={isListening ? t.ramax.listening : t.ramax.inputPlaceholder}
                className={`flex-1 py-2 px-3 bg-slate-900 text-xs text-white placeholder-slate-500 rounded-lg border border-slate-700 focus:border-[#9DCB16] focus:outline-none ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              />

              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="p-2 bg-[#9DCB16] hover:bg-[#8bb413] disabled:opacity-40 text-slate-950 rounded-lg transition-colors"
                aria-label={t.ramax.btnSend}
              >
                <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
