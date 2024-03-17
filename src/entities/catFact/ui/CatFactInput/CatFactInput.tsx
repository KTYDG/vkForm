import { ChangeEvent, useEffect, useRef } from "react";
import { CatFactInputTypes } from "../../model/types";
import { Input } from "@vkontakte/vkui";

function CatFactInput({ value, setValue }: CatFactInputTypes) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      const firstSpaceIndex: number = value.indexOf(" ");
      if (firstSpaceIndex !== -1) {
        const newPosition: number = firstSpaceIndex;
        inputRef.current.setSelectionRange(newPosition, newPosition);
      } else {
        inputRef.current.setSelectionRange(value.length, value.length);
      }
    }
  }, [value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      getRef={inputRef}
      type="text"
      placeholder="Кошачий факт"
      value={value}
      onChange={onChange}
    />
  );
}

export default CatFactInput;
