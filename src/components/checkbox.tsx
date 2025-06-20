export const InputCheck = () => {
    const handleClick = (id: number) => {
        console.log(id);
    }

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-5">
        <div className="inputCheck">
          <input onClick={() => handleClick(1)} type="radio" />
          <p>Easy to say</p>
        </div>
        <div className="inputCheck">
          <input onClick={() => handleClick(2)} type="radio" />
          <p>Easy to say</p>
        </div>
        <div className="inputCheck">
          <input onClick={() => handleClick(3)} type="radio" />
          <p>Easy to say</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="inputCheck">
          <input type="checkbox" />
          <p>Uppercase</p>
        </div>
        <div className="inputCheck">
          <input type="checkbox" />
          <p>Lowercase</p>
        </div>
        <div className="inputCheck">
          <input type="checkbox" />
          <p>Numbers</p>
        </div>
        <div className="inputCheck">
          <input type="checkbox" />
          <p>Symbols</p>
        </div>
      </div>
    </div>
  );
};
