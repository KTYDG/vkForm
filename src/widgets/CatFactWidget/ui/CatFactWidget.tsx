import { useState } from "react";
import CatFactInput from "~entities/catFact/ui/CatFactInput/CatFactInput";
import GetCatFactButton from "~features/getCatFact/ui/GetCatFactButton/GetCatFactButton";

function CatFactWidget() {
  const [catFact, setCatFact] = useState<string>("");

  return (
    <div className="flex flex-col gap-5">
      <CatFactInput value={catFact} setValue={setCatFact} />
      <GetCatFactButton setFact={setCatFact} />
    </div>
  );
}

export default CatFactWidget;
