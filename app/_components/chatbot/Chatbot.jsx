'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Send, Sparkles, User, X } from 'lucide-react';

const SUGGESTED_QUESTIONS = [
  'What are your top projects?',
  'What technologies do you use?',
  'Can I see your resume?',
  'How can I contact you?',
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Hi! I'm Biruk's AI assistant. Ask me anything about his projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async textToSend => {
    const userText = textToSend || input;
    if (!userText.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: userText.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage.text }),
      });

      const data = await response.json();
      const botText =
        data.text ||
        "I couldn't process that right now. Feel free to email Biruk at biruklemmadebela@gmail.com.";

      setMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'assistant', text: botText },
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: 'Connection error. You can reach Biruk at biruklemmadebela@gmail.com.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderFormattedText = text => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(
          <a
            key={`${idx}-${match.index}`}
            href={match[2]}
            target='_blank'
            rel='noopener noreferrer'
            className='underline underline-offset-2 transition-colors hover:text-primary'
          >
            {match[1]}
          </a>,
        );
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      const content = parts.map(part => {
        if (typeof part !== 'string') return part;
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return boldParts.map((bPart, bIdx) => {
          if (bPart.startsWith('**') && bPart.endsWith('**')) {
            return (
              <strong key={bIdx} className='font-medium'>
                {bPart.slice(2, -2)}
              </strong>
            );
          }
          return bPart;
        });
      });

      return (
        <span key={idx} className='block min-h-[1.2em]'>
          {content}
        </span>
      );
    });
  };

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsOpen(true)}
            className='group relative flex size-14 items-center justify-center rounded-full border border-border bg-foreground text-background shadow-lg transition-colors hover:bg-primary'
            aria-label='Open AI Chatbot'
          >
            <Bot className='size-5 transition-transform duration-300 group-hover:rotate-12' />
            <span className='absolute right-0 top-0 flex size-3'>
              <span className='absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60' />
              <span className='relative inline-flex size-3 rounded-full bg-primary' />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Popover Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            data-lenis-prevent
            onWheel={e => e.stopPropagation()}
            onTouchMove={e => e.stopPropagation()}
            className='flex h-[500px] w-[92vw] max-w-[370px] flex-col overflow-hidden overscroll-contain rounded-lg border border-border bg-background shadow-2xl'
          >
            {/* Header */}
            <div className='flex items-center justify-between border-b border-border bg-foreground px-4 py-3 text-background'>
              <div className='flex items-center gap-3'>
                <div className='flex size-8 items-center justify-center rounded-full border border-background/20'>
                  <Sparkles className='size-4' />
                </div>
                <div>
                  <h3 className='text-sm font-medium leading-tight tracking-wide'>
                    AI Assistant
                  </h3>
                  <span className='text-[11px] text-muted'>
                    Ask me about Biruk
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className='rounded-sm p-1 text-background/60 transition-colors hover:text-background'
                aria-label='Close Chat'
              >
                <X className='size-5' />
              </button>
            </div>

            {/* Messages */}
            <div
              data-lenis-prevent
              className='flex-1 space-y-3 overflow-y-auto overscroll-contain p-4 text-sm leading-relaxed'
            >
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs ${
                      msg.role === 'user'
                        ? 'bg-foreground text-background'
                        : 'border border-border bg-muted text-muted-foreground'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User className='size-3.5' />
                    ) : (
                      <Bot className='size-3.5' />
                    )}
                  </div>

                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      msg.role === 'user'
                        ? 'rounded-tr-none bg-foreground text-background'
                        : 'rounded-tl-none border border-border bg-muted/50 text-foreground'
                    }`}
                  >
                    <div>{renderFormattedText(msg.text)}</div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className='flex items-start gap-2.5'>
                  <div className='flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground'>
                    <Bot className='size-3.5' />
                  </div>
                  <div className='flex items-center gap-1 rounded-lg rounded-tl-none border border-border bg-muted/50 px-4 py-3'>
                    <span className='size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]' />
                    <span className='size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]' />
                    <span className='size-1.5 animate-bounce rounded-full bg-muted-foreground' />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            {messages.length < 4 && (
              <div
                data-lenis-prevent
                className='flex gap-1.5 overflow-x-auto border-t border-border px-3 py-2'
              >
                {SUGGESTED_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    disabled={isLoading}
                    className='shrink-0 rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground disabled:opacity-40'
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSendMessage();
              }}
              className='flex items-center gap-2 border-t border-border p-3'
            >
              <input
                type='text'
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder='Type a message...'
                className='flex-1 rounded-md border border-border bg-muted/30 px-3 py-2 text-sm text-foreground placeholder:text-secondary-foreground focus:border-foreground focus:outline-none'
              />
              <button
                type='submit'
                disabled={!input.trim() || isLoading}
                className='shrink-0 rounded-md bg-foreground p-2 text-background transition-colors hover:bg-primary disabled:opacity-30'
                aria-label='Send Message'
              >
                <Send className='size-4' />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
