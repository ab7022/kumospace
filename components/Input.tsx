const Input = ({
    placeholder, name, value, onChange, icon,
  }: {
    placeholder: string;
    icon?: React.ReactNode;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-neutral-700/30 hover:bg-neutral-700/50 rounded-lg transition-all duration-200 pl-10 pr-4 py-2 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-80 text-white`}
        />
      </div>
    );
  };

  export default Input;