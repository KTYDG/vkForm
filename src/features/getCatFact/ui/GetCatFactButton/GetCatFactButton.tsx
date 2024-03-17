import { getCatFact } from "~shared/api/catFact";
import { catFactButtonTypes } from "../../model/types";
import { memo } from "react";
import { useQuery } from "react-query";
import { Button } from "@vkontakte/vkui";

const GetCatFactButton = memo(function GetCatFactButton({
  setFact,
}: catFactButtonTypes) {
  const { isFetching, refetch } = useQuery("fact", getCatFact, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const onClick = async () => {
    const data = await refetch();
    setFact(data.data?.fact || "");
  };

  return (
    <Button loading={isFetching} size="l" onClick={onClick}>
      Получить кошачий факт 🧐
    </Button>
  );
});

export default GetCatFactButton;
