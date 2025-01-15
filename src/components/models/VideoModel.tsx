import { useState } from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const VideoModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block">
            {/* Placeholder image with play button */}
            <div
                className="relative cursor-pointer group"
                onClick={() => setIsOpen(true)}
            >
                <img
                    src="/Section.svg"
                    alt="Real Estate Management"
                    className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                    style={{ maxWidth: '600px' }}
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 p-4 rounded-full group-hover:bg-black/70 transition-all">
                        <Play className="w-12 h-12 text-white" />
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className=" max-w-5xl p-0">
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full rounded-md "
                            src="https://www.youtube.com/embed/9mGwVLKyibo?autoplay=1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default VideoModal;