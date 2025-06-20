interface SliderProps {
  value: number;
  setValue: (val: number) => void;
}

export const Slider = ({ value, setValue }: SliderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="flex flex-col gap-5">
      <p>Password length: <span className="font-bold">{value}</span></p>
      <div className="w-full flex gap-3 items-center">
        <input
          className="w-12 border px-2 text-center"
          type="number"
          min="1"
          max="50"
          value={value}
          onChange={handleChange}
        />
        <input
          type="range"
          min="1"
          max="50"
          value={value}
          onInput={handleChange}
          className="w-full"
        />
      </div>
    </div>
  );
};
