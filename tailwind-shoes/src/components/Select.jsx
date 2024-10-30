export function Select({ title, options }) {
  return (
    <div>
      <select>
        <option value="">
            {title}

        </option>
        {options.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
