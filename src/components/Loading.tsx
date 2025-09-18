import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft">
        {/* Animated gradient ring */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-spin">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"></div>
            </div>
          </div>
          {/* Outer glow ring */}
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-md animate-pulse"></div>
        </div>

        {/* Loading text with gradient */}
        <p className="text-xl font-semibold text-gradient animate-fade-in">
          Loading...
        </p>

        {/* Subtle progress dots */}
        <div className="flex space-x-1 mt-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;