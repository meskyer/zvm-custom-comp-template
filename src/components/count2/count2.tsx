import { useState } from 'react';

interface NameSelectorProps {
  initialName?: string;
}

export function NameSelector({ initialName = "张三" }: NameSelectorProps) {
  const [selectedName, setSelectedName] = useState<string>(initialName);
  
  // 定义下拉选择器的选项
  const names = ["张三", "李四", "王五", "赵六"];

  return (
    <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)}>
      {names.map(name => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
}
