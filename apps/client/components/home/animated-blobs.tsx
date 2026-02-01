'use client';

export default function AnimatedBlobs() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Purple blob */}
            <div
                className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"
            />

            {/* Blue blob */}
            <div
                className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"
                style={{ animationDelay: '2s' }}
            />

            {/* Pink blob */}
            <div
                className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-pink-600/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"
                style={{ animationDelay: '4s' }}
            />

            {/* Violet blob */}
            <div
                className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-violet-600/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"
                style={{ animationDelay: '6s' }}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80" />
        </div>
    );
}
