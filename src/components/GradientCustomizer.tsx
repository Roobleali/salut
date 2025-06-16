import { useState } from 'react';

interface GradientCustomizerProps {
    initialColors?: string[];
    onColorsChange?: (colors: string[]) => void;
}

export function GradientCustomizer({ initialColors = ['#2563eb', '#3b82f6'], onColorsChange }: GradientCustomizerProps) {
    const [colors, setColors] = useState(initialColors);

    const handleColorChange = (index: number, color: string) => {
        const newColors = [...colors];
        newColors[index] = color;
        setColors(newColors);
        onColorsChange?.(newColors);
    };

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-lg font-semibold">Gradient Customizer</h2>
            <div className="space-y-2">
                {colors.map((color, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <label className="text-sm">Color {index + 1}</label>
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => handleColorChange(index, e.target.value)}
                            className="w-12 h-8 rounded cursor-pointer"
                        />
                        <input
                            type="text"
                            value={color}
                            onChange={(e) => handleColorChange(index, e.target.value)}
                            className="w-24 px-2 py-1 border rounded"
                        />
                    </div>
                ))}
            </div>
            <div
                className="w-full h-32 rounded"
                style={{
                    background: `linear-gradient(to right, ${colors.join(', ')})`
                }}
            />
        </div>
    );
} 